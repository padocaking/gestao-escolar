package models

import (
	"time"
)

type Usuarios struct {
	Matricula      uint      `json:"matricula" gorm:"primaryKey;autoIncrement;unique"`
	Email          string    `json:"email" gorm:"type:varchar(50);unique"`
	Senha          string    `json:"senha" gorm:"type:varchar(50)"`
	Tipo           string    `json:"tipo" gorm:"type:enum('aluno','professor','coordenador')"`
	DataCriacao    time.Time `json:"data_criacao" gorm:"autoCreateTime"`
	Nome           string    `json:"nome" gorm:"type:varchar(50)"`
	DataNascimento time.Time `json:"data_nascimento"`
	Cpf            string    `json:"cpf" gorm:"type:varchar(11);unique"`
	Telefone       string    `json:"telefone" gorm:"type:varchar(50)"`
	Endereco       string    `json:"endereco" gorm:"type:varchar(100)"`
}

type Responsavel struct {
	MatriculaFilho uint      `json:"matricula_filho" gorm:"primaryKey"`
	Nome           string    `json:"nome" gorm:"type:varchar(50)"`
	DataNascimento time.Time `json:"data_nascimento"`
	Cpf            string    `json:"cpf" gorm:"type:varchar(11)"`
	Telefone       string    `json:"telefone" gorm:"type:varchar(50)"`
	Endereco       string    `json:"endereco" gorm:"type:varchar(100)"`
	Email          string    `json:"email" gorm:"type:varchar(50);unique"`
	DataCriacao    time.Time `json:"data_criacao" gorm:"autoCreateTime"`
}

type Professores struct {
	Matricula   uint    `json:"matricula" gorm:"primaryKey"`
	Formacao    string  `json:"formacao" gorm:"type:varchar(50)"`
	AreaAtuacao string  `json:"area_atuacao" gorm:"type:varchar(50)"`
	Salario     float64 `json:"salario" gorm:"type:decimal(15,2)"`
}

type Coordenadores struct {
	Matricula uint `json:"matricula" gorm:"primaryKey"`
}

type Turmas struct {
	Id     uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	Turma  string `json:"turma" gorm:"type:varchar(50)"`
	Ano    int    `json:"ano"`
	Periodo string `json:"periodo" gorm:"type:varchar(20)"`
	Grade  string `json:"grade" gorm:"type:varchar(120)"`
	Classe string `json:"classe" gorm:"type:varchar(30)"`
}

type Alunos struct {
	Matricula uint `json:"matricula" gorm:"primaryKey"`
	Turma     uint `json:"turma"`
}

type TurmaAluno struct {
	ID          uint    `json:"id" gorm:"primaryKey;autoIncrement"`
	IdTurma     uint    `json:"id_turma"`
	IdAluno     uint    `json:"id_aluno"`
	Prova1      float32 `json:"prova1"`
	Prova2      float32 `json:"prova2"`
	Atividade   float32 `json:"atividade"`
	TrabalhoBim float32 `json:"trabalhoBim"`
}

type Disciplinas struct {
	Id           uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	Nome         string `json:"nome" gorm:"type:varchar(50)"`
	CargaHoraria int    `json:"carga_horaria"`
}

type ProfessorTurmaDisciplina struct {
	ID                 uint `json:"id" gorm:"primaryKey;autoIncrement"`
	ProfessorMatricula uint `json:"professor_matricula"`
	TurmaId            uint `json:"turma_id"`
	DisciplinaId       uint `json:"disciplina_id"`
}

type Frequencias struct {
	AlunoMatricula             uint      `json:"aluno_matricula"`
	ProfessorTurmaDisciplinaId uint      `json:"professor_turma_disciplina_id"`
	DataAula                   time.Time `json:"data_aula"`
	Presente                   bool      `json:"presente"`
}
