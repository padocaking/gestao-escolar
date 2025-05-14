package controllers

import (
	"backend/models"
	"backend/services"
	"log"
	"strconv"

	"github.com/gofiber/fiber/v2"
)

func CriarUsuario(c *fiber.Ctx) error {
	var usuario models.Usuarios

	log.Println("[INFO] Recebendo requisição para criar usuário")

	// Verifica se o JSON é válido
	if err := c.BodyParser(&usuario); err != nil {
		log.Println("[ERROR] Erro ao fazer o bind do JSON:", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"erro": "JSON inválido",
		})
	}

	log.Printf("[DEBUG] Dados recebidos: %+v\n", usuario)

	// Cria o novo usuário
	novoUsuario, err := services.CriarUsuario(&usuario)
	if err != nil {
		log.Println("[ERROR] Erro ao criar usuário:", err)
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"erro": err.Error(),
		})
	}

	log.Printf("[INFO] Usuário criado com sucesso: ID %d\n", novoUsuario.Matricula)

	// Sucesso
	return c.Status(fiber.StatusCreated).JSON(novoUsuario)
}

func ListarUsuarios(c *fiber.Ctx) error {
	usuarios, err := services.BuscarUsuarios()
	if err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"erro": "erro ao buscar usuários",
		})
	}
	return c.JSON(usuarios)
}

func ObterUsuarioPorMatricula(c *fiber.Ctx) error {
	matriculaParam := c.Params("matricula")
	matricula, err := strconv.Atoi(matriculaParam)
	if err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"erro": "Matricula inválido",
		})
	}

	usuario, err := services.BuscarUsuarioPorMatricula(uint(matricula))
	if err != nil {
		return c.Status(fiber.StatusNotFound).JSON(fiber.Map{
			"erro": err.Error(),
		})
	}

	return c.JSON(usuario)
}
