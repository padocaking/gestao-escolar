package handler

import (
	"encoding/json"
	"net/http"
	"strconv"

	"backend/models"
	"backend/service"

	"github.com/go-chi/chi/v5"
)

type UserHandler struct {
	service      service.UserService
	loginService *service.LoginService
}

func NewUserHandler(userService service.UserService, loginService *service.LoginService) *UserHandler {
	return &UserHandler{
		service:      userService,
		loginService: loginService,
	}
}

// #################################
//
//
// AREA GERAL
//
//
// #################################

func (h *UserHandler) GetUser(w http.ResponseWriter, r *http.Request) {
	idStr := chi.URLParam(r, "id")
	id, err := strconv.ParseUint(idStr, 10, 32)
	if err != nil {
		http.Error(w, "ID inválido", http.StatusBadRequest)
		return
	}

	user, err := h.service.GetUserByID(r.Context(), uint(id))
	if err != nil {
		http.Error(w, "Usuário não encontrado", http.StatusNotFound)
		return
	}

	respondWithJSON(w, http.StatusOK, user)
}

func (h *UserHandler) CriarUsuario(w http.ResponseWriter, r *http.Request) {
	var usuario models.UsuarioGeral
	if err := json.NewDecoder(r.Body).Decode(&usuario); err != nil {
		respondWithJSON(w, http.StatusBadRequest, map[string]string{"erro": "JSON inválido"})
		return
	}

	novoUsuario, err := h.service.CreateUserGeral(r.Context(), &usuario)
	if err != nil {
		respondWithJSON(w, http.StatusBadRequest, map[string]string{"erro": err.Error()})
		return
	}

	respondWithJSON(w, http.StatusCreated, novoUsuario)
}

func (h *UserHandler) ListarUsuarios(w http.ResponseWriter, r *http.Request) {
	usuarios, err := h.service.GetAllUsers(r.Context())
	if err != nil {
		respondWithJSON(w, http.StatusInternalServerError, map[string]string{"erro": "erro ao buscar usuários"})
		return
	}
	respondWithJSON(w, http.StatusOK, usuarios)
}

func (h *UserHandler) ObterUsuariosPorTipo(w http.ResponseWriter, r *http.Request) {
	tipo := chi.URLParam(r, "tipo")
	usuario, err := h.service.GetUsersByTipo(r.Context(), tipo)
	if err != nil {
		respondWithJSON(w, http.StatusNotFound, map[string]string{"erro": err.Error()})
		return
	}
	respondWithJSON(w, http.StatusOK, usuario)
}

func (h *UserHandler) ObterUsuarioPorMatricula(w http.ResponseWriter, r *http.Request) {
	matricula := chi.URLParam(r, "matricula")
	usuario, err := h.service.GetUserByMatricula(r.Context(), matricula)
	if err != nil {
		respondWithJSON(w, http.StatusNotFound, map[string]string{"erro": err.Error()})
		return
	}
	respondWithJSON(w, http.StatusOK, usuario)
}

// #################################
//
// # AREA ALUNO
//
// #################################

func (h *UserHandler) ObterUsuarioPorMatriculaAluno(w http.ResponseWriter, r *http.Request) {
	matricula := chi.URLParam(r, "matricula")
	usuario, err := h.service.GetUserByMatriculaAluno(r.Context(), matricula)
	if err != nil {
		respondWithJSON(w, http.StatusNotFound, map[string]string{"erro": err.Error()})
		return
	}
	respondWithJSON(w, http.StatusOK, usuario)
}

func (h *UserHandler) AtualizarAluno(w http.ResponseWriter, r *http.Request) {
	matriculaParam := chi.URLParam(r, "matricula")
	matriculaUint, err := strconv.ParseUint(matriculaParam, 10, 32)
	if err != nil {
		respondWithJSON(w, http.StatusBadRequest, map[string]string{"erro": "Matrícula inválida"})
		return
	}

	var alunoAtualizado models.Alunos
	if err := json.NewDecoder(r.Body).Decode(&alunoAtualizado); err != nil {
		respondWithJSON(w, http.StatusBadRequest, map[string]string{"erro": "JSON inválido"})
		return
	}

	err = h.service.AtualizarAluno(r.Context(), uint(matriculaUint), &alunoAtualizado)
	if err != nil {
		respondWithJSON(w, http.StatusInternalServerError, map[string]string{"erro": err.Error()})
		return
	}

	respondWithJSON(w, http.StatusOK, map[string]string{"mensagem": "Aluno atualizado com sucesso"})
}

func (h *UserHandler) DeletarAluno(w http.ResponseWriter, r *http.Request) {
	matriculaParam := chi.URLParam(r, "matricula")
	matriculaUint, err := strconv.ParseUint(matriculaParam, 10, 32)
	if err != nil {
		respondWithJSON(w, http.StatusBadRequest, map[string]string{"erro": "Matrícula inválida"})
		return
	}

	err = h.service.DeletarAluno(r.Context(), uint(matriculaUint))
	if err != nil {
		respondWithJSON(w, http.StatusInternalServerError, map[string]string{"erro": err.Error()})
		return
	}

	respondWithJSON(w, http.StatusOK, map[string]string{"mensagem": "Aluno deletado com sucesso"})
}

// #################################
//
//
// AREA PROFESSOR
//
//
// #################################

func (h *UserHandler) ObterUsuarioPorMatriculaProfessor(w http.ResponseWriter, r *http.Request) {
	matricula := chi.URLParam(r, "matricula")
	usuario, err := h.service.GetUserByMatriculaProfessor(r.Context(), matricula)
	if err != nil {
		respondWithJSON(w, http.StatusNotFound, map[string]string{"erro": err.Error()})
		return
	}
	respondWithJSON(w, http.StatusOK, usuario)
}

func (h *UserHandler) AtualizarProfessor(w http.ResponseWriter, r *http.Request) {
	matriculaParam := chi.URLParam(r, "matricula")
	matriculaUint, err := strconv.ParseUint(matriculaParam, 10, 32)
	if err != nil {
		respondWithJSON(w, http.StatusBadRequest, map[string]string{"erro": "Matrícula inválida"})
		return
	}

	var professorAtualizado models.Professores
	if err := json.NewDecoder(r.Body).Decode(&professorAtualizado); err != nil {
		respondWithJSON(w, http.StatusBadRequest, map[string]string{"erro": "JSON inválido"})
		return
	}

	err = h.service.AtualizarProfessor(r.Context(), uint(matriculaUint), &professorAtualizado)
	if err != nil {
		respondWithJSON(w, http.StatusInternalServerError, map[string]string{"erro": err.Error()})
		return
	}

	respondWithJSON(w, http.StatusOK, map[string]string{"mensagem": "Aluno atualizado com sucesso"})
}

func (h *UserHandler) DeletarProfessor(w http.ResponseWriter, r *http.Request) {
	matriculaParam := chi.URLParam(r, "matricula")
	matriculaUint, err := strconv.ParseUint(matriculaParam, 10, 32)
	if err != nil {
		respondWithJSON(w, http.StatusBadRequest, map[string]string{"erro": "Matrícula inválida"})
		return
	}

	err = h.service.DeletarProfessor(r.Context(), uint(matriculaUint))
	if err != nil {
		respondWithJSON(w, http.StatusInternalServerError, map[string]string{"erro": err.Error()})
		return
	}

	respondWithJSON(w, http.StatusOK, map[string]string{"mensagem": "Aluno deletado com sucesso"})
}

// #################################
//
//
// AREA COORDENADOR
//
//
// #################################

func (h *UserHandler) ObterUsuarioPorMatriculaCoordenador(w http.ResponseWriter, r *http.Request) {
	matricula := chi.URLParam(r, "matricula")
	usuario, err := h.service.GetUserByMatriculaCoordenador(r.Context(), matricula)
	if err != nil {
		respondWithJSON(w, http.StatusNotFound, map[string]string{"erro": err.Error()})
		return
	}
	respondWithJSON(w, http.StatusOK, usuario)
}

func (h *UserHandler) AtualizarCoordenador(w http.ResponseWriter, r *http.Request) {
	matriculaParam := chi.URLParam(r, "matricula")
	matriculaUint, err := strconv.ParseUint(matriculaParam, 10, 32)
	if err != nil {
		respondWithJSON(w, http.StatusBadRequest, map[string]string{"erro": "Matrícula inválida"})
		return
	}

	var coordenadorAtualizado models.Coordenadores
	if err := json.NewDecoder(r.Body).Decode(&coordenadorAtualizado); err != nil {
		respondWithJSON(w, http.StatusBadRequest, map[string]string{"erro": "JSON inválido"})
		return
	}

	err = h.service.AtualizarCoordenador(r.Context(), uint(matriculaUint), &coordenadorAtualizado)
	if err != nil {
		respondWithJSON(w, http.StatusInternalServerError, map[string]string{"erro": err.Error()})
		return
	}

	respondWithJSON(w, http.StatusOK, map[string]string{"mensagem": "Aluno atualizado com sucesso"})
}

func (h *UserHandler) DeletarCoordenador(w http.ResponseWriter, r *http.Request) {
	matriculaParam := chi.URLParam(r, "matricula")
	matriculaUint, err := strconv.ParseUint(matriculaParam, 10, 32)
	if err != nil {
		respondWithJSON(w, http.StatusBadRequest, map[string]string{"erro": "Matrícula inválida"})
		return
	}

	err = h.service.DeletarCoordenador(r.Context(), uint(matriculaUint))
	if err != nil {
		respondWithJSON(w, http.StatusInternalServerError, map[string]string{"erro": err.Error()})
		return
	}

	respondWithJSON(w, http.StatusOK, map[string]string{"mensagem": "Aluno deletado com sucesso"})
}

// #################################
//
//
// AREA LOGIN
//
//
// #################################

func (h *UserHandler) LoginHandler(w http.ResponseWriter, r *http.Request) {
	var req models.RequisicaoLogin
	if err := json.NewDecoder(r.Body).Decode(&req); err != nil {
		respondWithJSON(w, http.StatusBadRequest, map[string]string{"erro": "dados inválidos"})
		return
	}

	token, err := h.loginService.Login(&req)
	if err != nil {
		respondWithJSON(w, http.StatusUnauthorized, map[string]string{"erro": err.Error()})
		return
	}

	user, err := h.service.GetUserByMatricula(r.Context(), req.Matricula)

	if err != nil {
		respondWithJSON(w, http.StatusUnauthorized, map[string]string{"erro": "usuário não encontrado"})
		return
	}

	respondWithJSON(w, http.StatusOK, map[string]interface{}{
		"token": token,
		"tipo":  user.Tipo,
		"nome":  user.Nome,
	})
}

// #################################
//
// # AREA UTILITARIOS
//
// #################################
// respondWithJSON é helper pra enviar JSON na resposta
func respondWithJSON(w http.ResponseWriter, status int, payload interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(payload)
}
