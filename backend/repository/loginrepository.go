package repository

import (
	"backend/database"
	"backend/models"
)

func Login(usuario *models.Usuarios) error {
	return database.DB.Where("matricula = ? AND senha = ?", usuario.Matricula, usuario.Senha).First(usuario).Error
}
