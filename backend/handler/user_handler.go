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

func (h *UserHandler) CriarUsuario(w http.ResponseWriter, r *http.Request) {
	var usuario models.Usuarios
	if err := json.NewDecoder(r.Body).Decode(&usuario); err != nil {
		respondWithJSON(w, http.StatusBadRequest, map[string]string{"erro": "JSON inválido"})
		return
	}

	novoUsuario, err := h.service.CreateUser(r.Context(), &usuario)
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

func (h *UserHandler) ObterUsuarioPorMatricula(w http.ResponseWriter, r *http.Request) {
	matricula := chi.URLParam(r, "matricula")
	usuario, err := h.service.GetUserByMatricula(r.Context(), matricula)
	if err != nil {
		respondWithJSON(w, http.StatusNotFound, map[string]string{"erro": err.Error()})
		return
	}
	respondWithJSON(w, http.StatusOK, usuario)
}

// respondWithJSON é helper pra enviar JSON na resposta
func respondWithJSON(w http.ResponseWriter, status int, payload interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(payload)
}
