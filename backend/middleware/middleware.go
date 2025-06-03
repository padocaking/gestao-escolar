package middleware

import (
	"context"
	"encoding/json"
	"fmt"
	"log"
	"net/http"
	"strings"
	"time"

	"github.com/golang-jwt/jwt/v5"
)

// Chaves para o contexto (usando tipo custom para evitar colisão)
type contextKey string

const (
	ContextMatriculaKey contextKey = "matricula"
	ContextTipoKey      contextKey = "tipo"
)

// Logger registra método, URI e tempo de execução da requisição
func Logger(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		start := time.Now()
		next.ServeHTTP(w, r)
		log.Printf("%s %s %v", r.Method, r.RequestURI, time.Since(start))
	})
}

// Autenticar valida JWT do header Authorization Bearer e injeta claims no contexto
func Autenticar(next http.Handler) http.Handler {
	return http.HandlerFunc(func(w http.ResponseWriter, r *http.Request) {
		authHeader := r.Header.Get("Authorization")
		if authHeader == "" {
			respondWithJSON(w, http.StatusUnauthorized, map[string]string{"erro": "token ausente"})
			return
		}

		tokenStr := strings.TrimPrefix(authHeader, "Bearer ")
		token, err := jwt.Parse(tokenStr, func(token *jwt.Token) (interface{}, error) {
			if _, ok := token.Method.(*jwt.SigningMethodHMAC); !ok {
				return nil, fmt.Errorf("método de assinatura inválido")
			}
			return jwtSecret, nil
		})

		if err != nil || !token.Valid {
			respondWithJSON(w, http.StatusUnauthorized, map[string]string{"erro": "token inválido"})
			return
		}

		claims, ok := token.Claims.(jwt.MapClaims)
		if !ok {
			respondWithJSON(w, http.StatusUnauthorized, map[string]string{"erro": "claims inválidos"})
			return
		}

		matricula, _ := claims["matricula"].(string)
		tipo, _ := claims["tipo"].(string)

		ctx := context.WithValue(r.Context(), ContextMatriculaKey, matricula)
		ctx = context.WithValue(ctx, ContextTipoKey, tipo)

		next.ServeHTTP(w, r.WithContext(ctx))
	})
}

// respondWithJSON ajuda a enviar respostas JSON padrão
func respondWithJSON(w http.ResponseWriter, status int, payload interface{}) {
	w.Header().Set("Content-Type", "application/json")
	w.WriteHeader(status)
	json.NewEncoder(w).Encode(payload)
}
