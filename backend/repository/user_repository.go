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
	GetByMatriculaAluno(ctx context.Context, matricula string) (*models.Alunos, error)
	GetByMatriculaProfesor(ctx context.Context, matricula string) (*models.Professores, error)
	GetByMatriculaCoordenador(ctx context.Context, matricula string) (*models.Coordenadores, error)
	GetAllByTipo(ctx context.Context, tipo string) ([]models.Usuarios, error)
	CreateUser(ctx context.Context, usuario *models.UsuarioGeral) error
	ListAll(ctx context.Context) ([]models.Usuarios, error)
	UpdateAluno(ctx context.Context, matricula uint, dadosAtualizados *models.Alunos) error
	DeleteAluno(ctx context.Context, matricula uint) error
	UpdateProfessor(ctx context.Context, matricula uint, dadosAtualizados *models.Professores) error
	DeleteProfessor(ctx context.Context, matricula uint) error
	UpdateCoordenador(ctx context.Context, matricula uint, dadosAtualizados *models.Coordenadores) error
	DeleteCoordenador(ctx context.Context, matricula uint) error
}

type userRepository struct {
	db *gorm.DB
}

func NewUserRepository(db *gorm.DB) UserRepository {
	return &userRepository{db: db}
}

// #################################
//
//
// AREA GERAL
//
//
// #################################

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

func (r *userRepository) GetAllByTipo(ctx context.Context, tipo string) ([]models.Usuarios, error) {
	var users []models.Usuarios
	if err := r.db.WithContext(ctx).Where("tipo = ?", tipo).Find(&users).Error; err != nil {
		return nil, err
	}
	return users, nil
}

func (r *userRepository) CreateUser(ctx context.Context, usuario *models.UsuarioGeral) error {
	matricula, err := GerarMatricula(r.db, *usuario.Tipo)
	if err != nil {
		return err
	}

	// Atribui a matrícula gerada ao ponteiro
	usuario.Matricula = &matricula

	// Cria o usuário genérico
	if err := r.db.WithContext(ctx).Create(usuario).Error; err != nil {
		return err
	}

	// Converte matrícula string para uint
	matriculaUint, err := strconv.ParseUint(matricula, 10, 64)
	if err != nil {
		return fmt.Errorf("erro ao converter matrícula: %v", err)
	}

	switch *usuario.Tipo {
	case "05": // Aluno
		aluno := &models.Alunos{
			Matricula: uint(matriculaUint),
			Turma:     usuario.Turma,
		}
		if err := r.db.WithContext(ctx).Create(aluno).Error; err != nil {
			return err
		}

	case "07": // Professor
		professor := &models.Professores{
			Matricula:   uint(matriculaUint),
			Nome:        *usuario.Nome,
			Disciplinas: *usuario.Disciplinas,
			Salario:     *usuario.Salario,
		}
		if err := r.db.WithContext(ctx).Create(professor).Error; err != nil {
			return err
		}

	case "10": // Coordenador
		coordenador := &models.Coordenadores{
			Matricula: uint(matriculaUint),
		}
		if err := r.db.WithContext(ctx).Create(coordenador).Error; err != nil {
			return err
		}

	default:
		return fmt.Errorf("tipo de usuário inválido: %s", *usuario.Tipo)
	}

	return nil
}

func (r *userRepository) ListAll(ctx context.Context) ([]models.Usuarios, error) {
	var users []models.Usuarios
	if err := r.db.WithContext(ctx).Find(&users).Error; err != nil {
		return nil, err
	}
	return users, nil
}

// #################################
//
// # AREA ALUNO
//
// #################################
func (r *userRepository) GetByMatriculaAluno(ctx context.Context, matricula string) (*models.Alunos, error) {
	var user models.Alunos
	if err := r.db.WithContext(ctx).Where("matricula = ?", matricula).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *userRepository) UpdateAluno(ctx context.Context, matricula uint, dadosAtualizados *models.Alunos) error {
	// Busca o aluno existente
	var aluno models.Alunos
	if err := r.db.WithContext(ctx).First(&aluno, "matricula = ?", matricula).Error; err != nil {
		return err
	}

	// Atualiza os campos (somente os que não forem zero/zero value)
	if err := r.db.WithContext(ctx).Model(&aluno).Updates(dadosAtualizados).Error; err != nil {
		return err
	}

	return nil
}

func (r *userRepository) DeleteAluno(ctx context.Context, matricula uint) error {
	if err := r.db.WithContext(ctx).Where("matricula = ?", matricula).Delete(&models.Alunos{}).Error; err != nil {
		return err
	}
	return nil
}

// #################################
//
//
// AREA PROFESSOR
//
//
// #################################

func (r *userRepository) GetByMatriculaProfesor(ctx context.Context, matricula string) (*models.Professores, error) {
	var user models.Professores
	if err := r.db.WithContext(ctx).Where("matricula = ?", matricula).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *userRepository) UpdateProfessor(ctx context.Context, matricula uint, dadosAtualizados *models.Professores) error {
	// Busca o aluno existente
	var professor models.Professores
	if err := r.db.WithContext(ctx).First(&professor, "matricula = ?", matricula).Error; err != nil {
		return err
	}

	// Atualiza os campos (somente os que não forem zero/zero value)
	if err := r.db.WithContext(ctx).Model(&professor).Updates(dadosAtualizados).Error; err != nil {
		return err
	}

	return nil
}

func (r *userRepository) DeleteProfessor(ctx context.Context, matricula uint) error {
	if err := r.db.WithContext(ctx).Where("matricula = ?", matricula).Delete(&models.Professores{}).Error; err != nil {
		return err
	}
	return nil
}

// #################################
//
//
// AREA COORDENADOR
//
//
// #################################

func (r *userRepository) GetByMatriculaCoordenador(ctx context.Context, matricula string) (*models.Coordenadores, error) {
	var user models.Coordenadores
	if err := r.db.WithContext(ctx).Where("matricula = ?", matricula).First(&user).Error; err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *userRepository) UpdateCoordenador(ctx context.Context, matricula uint, dadosAtualizados *models.Coordenadores) error {
	// Busca o aluno existente
	var coordenador models.Coordenadores
	if err := r.db.WithContext(ctx).First(&coordenador, "matricula = ?", matricula).Error; err != nil {
		return err
	}

	// Atualiza os campos (somente os que não forem zero/zero value)
	if err := r.db.WithContext(ctx).Model(&coordenador).Updates(dadosAtualizados).Error; err != nil {
		return err
	}

	return nil
}

func (r *userRepository) DeleteCoordenador(ctx context.Context, matricula uint) error {
	if err := r.db.WithContext(ctx).Where("matricula = ?", matricula).Delete(&models.Coordenadores{}).Error; err != nil {
		return err
	}
	return nil
}

// #################################
//
//
// AREA UTILITARIOS
//
//
// #################################

// Função geradora de matrícula permanece fora da interface (pode ser refatorada para outra camada)
var tipoCodigo = map[string]string{
	"aluno":       "05",
	"professor":   "07",
	"coordenador": "10",
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
