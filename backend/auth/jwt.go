package auth

import (
	"backend/models"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

var jwtSecret = []byte("sua-chave-super-secreta")

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
