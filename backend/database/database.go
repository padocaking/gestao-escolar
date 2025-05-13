package database

import (
	"fmt"
	"log"

	"gorm.io/driver/mysql"
	"gorm.io/gorm"
	"gorm.io/gorm/logger"
)

var DB *gorm.DB

func Connect() {
	var err error
	dsn := "novousuario:NovaSenha123@tcp(127.0.0.1:3306)/projeto?charset=utf8mb4&parseTime=True&loc=Local"
	DB, err = gorm.Open(mysql.Open(dsn), &gorm.Config{
		Logger: logger.Default.LogMode(logger.Info),
	})
	if err != nil {
		log.Fatal("Erro ao conectar ao banco de dados:", err)
	}

	fmt.Println("Conexão com o banco de dados estabelecida!")
}
