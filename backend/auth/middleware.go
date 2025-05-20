package auth

import (
	"fmt"
	"strings"

	"github.com/gofiber/fiber/v2"
	"github.com/golang-jwt/jwt/v5"
)

func Autenticar(c *fiber.Ctx) error {
	authHeader := c.Get("Authorization")
	if authHeader == "" {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"erro": "token ausente"})
	}

	tokenStr := strings.TrimPrefix(authHeader, "Bearer ")
	token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
		if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
			return nil, fmt.Errorf("método de assinatura inválido")
		}
		return jwtSecret, nil
	})

	if err != nil || !token.Valid {
		return c.Status(fiber.StatusUnauthorized).JSON(fiber.Map{"erro": "token inválido"})
	}

	claims := token.Claims.(jwt.MapClaims)
	c.Locals("matricula", claims["matricula"])
	c.Locals("tipo", claims["tipo"])

	return c.Next()
}
