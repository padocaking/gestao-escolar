package repository

import (
	"backend/database"
	"backend/models"
)

func Login(req *models.RequisicaoLogin) (*models.Usuarios, error) {
	var usuario models.Usuarios
	err := database.DB.Where("matricula = ? AND senha = ?", req.Matricula, req.Senha).First(&usuario).Error
	if err != nil {
		return nil, err
	}
	return &usuario, nil
}
