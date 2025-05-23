package repository

import (
	"backend/database"
	"backend/models"
)

func Login(req *models.RequisicaoLogin) (*models.Usuarios, error) {
	var usuario models.Usuarios
	err := database.DB.Where("matricula = ?", req.Matricula).First(&usuario).Error
	if err != nil {
		return nil, err
	}
	return &usuario, nil
}
