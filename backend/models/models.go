package models

import (
	"time"
)

type Turmas struct {
	Id        uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	Nome      string `json:"nome" gorm:"type:varchar(50)"`
	AnoLetivo int    `json:"ano_letivo"`
	Turno     string `json:"turno" gorm:"type:varchar(20)"`
}

type Frequencias struct {
	Id                         uint      `json:"id" gorm:"primaryKey;autoIncrement"`
	AlunoMatricula             uint      `json:"aluno_matricula"`
	ProfessorTurmaDisciplinaId uint      `json:"professor_turma_disciplina_id"`
	DataAula                   time.Time `json:"data_aula"`
	Presente                   bool      `json:"presente"`
}

type ProfessorTurmaDisciplina struct {
	ID                 uint `json:"id" gorm:"primaryKey;autoIncrement"`
	ProfessorMatricula uint `json:"professor_matricula"`
	TurmaId            uint `json:"turma_id"`
	DisciplinaId       uint `json:"disciplina_id"`
}

type Disciplinas struct {
	Id           uint   `json:"id" gorm:"primaryKey;autoIncrement"`
	Nome         string `json:"nome" gorm:"type:varchar(50)"`
	CargaHoraria int    `json:"carga_horaria"`
}

type Notas struct {
	AlunoMatricula             uint      `json:"aluno_matricula"`
	ProfessorTurmaDisciplinaId uint      `json:"professor_turma_disciplina_id"`
	Nota                       float32   `json:"nota"`
	DataAvalaiacao             time.Time `json:"data_avaliacao"`
	TipoAvaliacacao            string    `json:"tipo_avaliacao" gorm:"type:varchar(50)"`
}
