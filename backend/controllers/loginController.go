package controllers

import (
	"backend/models"
	"backend/services"

	"github.com/gofiber/fiber/v2"
)

func LoginHandler(c *fiber.Ctx) error {
	var req models.RequisicaoLogin

	if err := c.BodyParser(&req); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"erro": "dados inválidos",
		})
	}

	usuario, err := services.LoginService(&req)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"erro": err.Error(),
		})
	}

	return c.JSON(usuario) // ou token, se você gerar um
}
