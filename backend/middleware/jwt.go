package middleware

import (
	"backend/models"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var jwtSecret = []byte("GrupinhoDoGoolang35e1try1s6er4gs3e64tg3s6e55gs4e365t41es34654t41e35s4ts")

func GerarToken(usuario *models.Usuarios) (string, error) {
	claims := jwt.MapClaims{
		"matricula": usuario.Matricula,
		"nome":      usuario.Nome,
		"tipo":      usuario.Tipo,
		"exp":       time.Now().Add(24 * time.Hour).Unix(),
	}

	token := jwt.NewWithClaims(jwt.SigningMethodHS256, claims)
	return token.SignedString(jwtSecret)
}
