package services

import (
	"backend/auth"
	"backend/models"
	"backend/repository"
	"errors"

	"golang.org/x/crypto/bcrypt"
)

func LoginService(req *models.RequisicaoLogin) (string, error) {
	usuario, err := repository.Login(req)
	if err != nil {
		return "", errors.New("usuário ou senha inválidos")
	}

	if err := bcrypt.CompareHashAndPassword([]byte(usuario.Senha), []byte(req.Senha)); err != nil {
		return "", errors.New("usuário ou senha inválidos")
	}

	token, err := auth.GerarToken(usuario)
	if err != nil {
		return "", errors.New("erro ao gerar token")
	}

	return token, nil
}
