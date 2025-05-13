package controllers

import (
	"backend/models"
	"backend/services"

	"github.com/gofiber/fiber/v2"
)

func Login(c *fiber.Ctx) error {
	var loginRequest models.Usuarios

	if err := c.BodyParser(&loginRequest); err != nil {
		return c.Status(fiber.StatusBadRequest).JSON(fiber.Map{
			"erro": "dados inválidos",
		})
	}

	usuario, err := services.LoginService(&loginRequest)
	if err != nil {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{
			"erro": err.Error(),
		})
	}

	return c.JSON(usuario)
}
