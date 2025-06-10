package config

import (
	"os"
)

type Config struct {
	ServerAddress string
	DBDSN         string
}

func LoadConfig() (*Config, error) {
	cfg := &Config{
		ServerAddress: getEnv("SERVER_ADDRESS", ":8080"),
		DBDSN:         getEnv("DATABASE_DSN", "root:root@tcp(127.0.0.1:3306)/projeto?charset=utf8mb4&parseTime=True&loc=Local"),
	}
	return cfg, nil
}

func getEnv(key, fallback string) string {
	if v := os.Getenv(key); v != "" {
		return v
	}
	return fallback
}
