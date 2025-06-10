package repository

import (
	"context"
	"fmt"
	"strconv"
	"time"

	"backend/models"

	"gorm.io/gorm"
)

type UserRepository interface {
	GetByID(ctx context.Context, id uint) (*models.Usuarios, error)
	GetByMatricula(ctx context.Context, matricula string) (*models.Usuarios, error)
	Create(ctx context.Context, usuario *models.Usuarios) error
	ListAll(ctx context.Context) ([]models.Usuarios, error)
}

type userRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) UserRepository {
	return &userRepository{db: db}
}

func (r *userRepository) GetByID(ctx context.Context, id uint) (*models.Usuarios, error) {
	var user models.Usuarios
	if err := r.db.WithContext(ctx).First(&user, id).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *userRepository) GetByMatricula(ctx context.Context, matricula string) (*models.Usuarios, error) {
	var user models.Usuarios
	if err := r.db.WithContext(ctx).Where("matricula = ?", matricula).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *userRepository) Create(ctx context.Context, usuario *models.Usuarios) error {
	matricula, err := GerarMatricula(r.db, usuario.Tipo)
	if err != nil {
		return err
	}

	usuario.Matricula = matricula
	return r.db.WithContext(ctx).Create(usuario).Error
}

func (r *userRepository) ListAll(ctx context.Context) ([]models.Usuarios, error) {
	var users []models.Usuarios
	if err := r.db.WithContext(ctx).Find(&users).Error; err != nil {
		return nil, err
	}
	return users, nil
}

// Função geradora de matrícula permanece fora da interface (pode ser refatorada para outra camada)
var tipoCodigo = map[string]string{
	"aluno":     "05",
	"professor": "07",
	"diretor":   "10",
}

func GerarMatricula(db *gorm.DB, tipo string) (string, error) {
	ano := time.Now().Year()
	codigo, existe := tipoCodigo[tipo]
	if !existe {
		return "", fmt.Errorf("tipo inválido: %s", tipo)
	}

	prefixo := fmt.Sprintf("%d%s", ano, codigo)

	var ultima models.Usuarios
	err := db.
		Where("matricula LIKE ?", prefixo+"%").
		Order("matricula DESC").
		First(&ultima).Error

	var sequencia int
	if err == nil && len(ultima.Matricula) == 10 {
		sequenciaStr := ultima.Matricula[6:]
		sequencia, err = strconv.Atoi(sequenciaStr)
		if err != nil {
			return "", fmt.Errorf("erro ao converter sequência: %w", err)
		}
		sequencia++
	} else {
		sequencia = 1
	}

	matricula := fmt.Sprintf("%s%04d", prefixo, sequencia)
	return matricula, nil
}
