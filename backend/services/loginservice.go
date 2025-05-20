package services

import (
	"backend/models"
	"backend/repository"
	"errors"
)

func LoginService(req *models.RequisicaoLogin) (*models.Usuarios, error) {
	usuario, err := repository.Login(req)
	if err != nil {
		return nil, errors.New("usuário ou senha inválidos")
	}
	return usuario, nil
}
