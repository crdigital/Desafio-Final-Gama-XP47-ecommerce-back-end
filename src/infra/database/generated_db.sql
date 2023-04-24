
-- MySQL Script generated by MySQL Workbench
-- Mon Apr 24 08:03:04 2023
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema ecommerce
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `ecommerce` DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci ;
USE `ecommerce` ;

-- -----------------------------------------------------
-- Table `ecommerce`.`categorias`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`categorias` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(145) NOT NULL,
  `descricao` VARCHAR(300) NOT NULL,
  `imagem` VARCHAR(300) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 3
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`configloja`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`configloja` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nomeFantasia` VARCHAR(145) NOT NULL,
  `endCompleto` VARCHAR(300) NOT NULL,
  `email` VARCHAR(145) NOT NULL,
  `fone` VARCHAR(45) NOT NULL,
  `instagram` VARCHAR(155) NOT NULL,
  `facebook` VARCHAR(155) NOT NULL,
  `twitter` VARCHAR(155) NOT NULL,
  `logotipo` VARCHAR(300) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 2
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`cupons`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`cupons` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(145) NOT NULL,
  `valor` DOUBLE NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`))
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`usuarios`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`usuarios` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `nome` VARCHAR(255) NOT NULL,
  `email` VARCHAR(145) NOT NULL,
  `senha` VARCHAR(300) NOT NULL,
  `fone` VARCHAR(45) NOT NULL,
  `tipo` VARCHAR(2) NOT NULL DEFAULT '2',
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `email` (`email` ASC) VISIBLE)
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`enderecos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`enderecos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idUsuario` INT NOT NULL,
  `logradouro` VARCHAR(145) NOT NULL,
  `numero` VARCHAR(45) NOT NULL,
  `bairro` VARCHAR(145) NOT NULL,
  `cidade` VARCHAR(145) NOT NULL,
  `estado` VARCHAR(2) NOT NULL,
  `cep` VARCHAR(12) NOT NULL,
  `tipo` VARCHAR(2) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idUsuario` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `enderecos_ibfk_1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `ecommerce`.`usuarios` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`pedidos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`pedidos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idUsuario` INT NOT NULL,
  `dataPedido` VARCHAR(45) NOT NULL,
  `valorTotal` DOUBLE NOT NULL,
  `status` VARCHAR(45) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idUsuario` (`idUsuario` ASC) VISIBLE,
  CONSTRAINT `pedidos_ibfk_1`
    FOREIGN KEY (`idUsuario`)
    REFERENCES `ecommerce`.`usuarios` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 10
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`produtos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`produtos` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idCategoria` INT NOT NULL,
  `nome` VARCHAR(255) NOT NULL,
  `descricao` TEXT NOT NULL,
  `preco` DOUBLE NOT NULL,
  `imagem` VARCHAR(255) NOT NULL,
  `status` VARCHAR(145) NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idCategoria` (`idCategoria` ASC) VISIBLE,
  CONSTRAINT `produtos_ibfk_1`
    FOREIGN KEY (`idCategoria`)
    REFERENCES `ecommerce`.`categorias` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 4
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`itenspedido`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`itenspedido` (
  `id` INT NOT NULL AUTO_INCREMENT,
  `idPedido` INT NOT NULL,
  `idProduto` INT NOT NULL,
  `preco` DOUBLE NOT NULL,
  `quantidade` INT NOT NULL,
  `createdAt` DATETIME NOT NULL,
  `updatedAt` DATETIME NOT NULL,
  PRIMARY KEY (`id`),
  INDEX `idPedido` (`idPedido` ASC) VISIBLE,
  INDEX `idProduto` (`idProduto` ASC) VISIBLE,
  CONSTRAINT `itenspedido_ibfk_1`
    FOREIGN KEY (`idPedido`)
    REFERENCES `ecommerce`.`pedidos` (`id`),
  CONSTRAINT `itenspedido_ibfk_2`
    FOREIGN KEY (`idProduto`)
    REFERENCES `ecommerce`.`produtos` (`id`))
ENGINE = InnoDB
AUTO_INCREMENT = 19
DEFAULT CHARACTER SET = utf8mb4
COLLATE = utf8mb4_0900_ai_ci;


-- -----------------------------------------------------
-- Table `ecommerce`.`sequelizemeta`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `ecommerce`.`sequelizemeta` (
  `name` VARCHAR(255) NOT NULL,
  PRIMARY KEY (`name`),
  UNIQUE INDEX `name` (`name` ASC) VISIBLE)
ENGINE = InnoDB
DEFAULT CHARACTER SET = utf8
COLLATE = utf8_unicode_ci;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;
