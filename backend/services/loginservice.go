package services

import (
	"backend/models"
	"backend/repository"
	"errors"
)

func LoginService(usuario *models.Usuarios) (*models.Usuarios, error) {
	err := repository.Login(usuario)
	if err != nil {
		return nil, errors.New("usuário ou senha inválidos")
	}
	return usuario, nil
}
