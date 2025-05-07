package controllers

import (
	"backend/models"
	"backend/services"

	"github.com/gofiber/fiber/v2"
)

func CriarUsuarioHandler(c *fiber.Ctx) error {
	var req models.UsuarioRequest

	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"erro": "Dados inválidos: " + err.Error(),
		})
	}

	if err := services.CriarUsuarioCompletoService(&req); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"erro": err.Error(),
		})
	}

	return c.Status(fiber.StatusCreated).JSON(fiber.Map{
		"mensagem": "Usuário criado com sucesso",
	})
}
// bussssscarrr
func BuscarTodosUsuariosHandler(c *fiber.Ctx) error {
	var usuarios []models.Usuarios
	if err := services.BuscarTodosUsuariosService(&usuarios); err != nil {
		return c.Status(fiber.StatusInternalServerError).JSON(fiber.Map{
			"erro": "Erro ao buscar usuários",
		})
	}

	return c.JSON(usuarios)
}
