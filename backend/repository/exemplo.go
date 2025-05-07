package repository

import (
	"backend/database"
	"backend/models"
)

func CriarUsuario(usuario *models.Usuarios) error {
	return database.DB.Create(usuario).Error
}

func BuscarTodosUsuarios(usuarios *[]models.Usuarios) error {
	return database.DB.Find(usuarios).Error
}

func CriarUsuarioCompleto(usuario *models.Usuarios, info *models.InformacoesUsuario) error {

	if err := database.DB.Create(usuario).Error; err != nil {
		return err
	}

	usuario.Matricula = info.Matricula

	if err := database.DB.Create(info).Error; err != nil {
		return err
	}

	return nil
}
