package repository

import (
	"backend/database"
	"backend/models"
)

func CriarUsuario(usuario *models.Usuarios) error {
	return database.DB.Create(usuario).Error
}
