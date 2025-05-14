package repository

import (
	"backend/database"
	"backend/models"
)

func CriarUsuario(usuario *models.Usuarios) error {
	return database.DB.Create(usuario).Error
}

func RetornaUsuarios() ([]models.Usuarios, error) {
	var usuarios []models.Usuarios
	err := database.DB.Find(&usuarios).Error
	return usuarios, err
}
