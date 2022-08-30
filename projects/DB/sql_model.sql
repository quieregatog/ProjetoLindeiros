-- MySQL Script generated by MySQL Workbench
-- sex 18 fev 2022 18:29:23
-- Model: New Model    Version: 1.0
-- MySQL Workbench Forward Engineering

SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0;
SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0;
SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION';

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------

-- -----------------------------------------------------
-- Schema mydb
-- -----------------------------------------------------
CREATE SCHEMA IF NOT EXISTS `mydb` DEFAULT CHARACTER SET utf8 ;
USE `mydb` ;

-- -----------------------------------------------------
-- Table `mydb`.`tb_progress`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_progress` (
  `id` VARCHAR(40) NOT NULL,
  `total` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_objective`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_objective` (
  `id` VARCHAR(40) NOT NULL,
  `general` TEXT NOT NULL,
  `specific` JSON NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_eixos`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_eixos` (
  `id` VARCHAR(40) NOT NULL,
  `name` VARCHAR(30) NOT NULL,
  `sigle` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_demands`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_demands` (
  `id` VARCHAR(40) NOT NULL,
  `name` VARCHAR(30) NOT NULL,
  `description` VARCHAR(150) NULL,
  `updated` DATETIME NOT NULL,
  `priority` VARCHAR(20) NOT NULL,
  `tb_objective_id` VARCHAR(40) NOT NULL,
  `tb_eixos_id` VARCHAR(40) NOT NULL,
  `tb_progress_id` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_tb_demands_tb_progress1_idx` (`tb_progress_id` ASC) VISIBLE,
  INDEX `fk_tb_demands_tb_objective1_idx` (`tb_objective_id` ASC) VISIBLE,
  INDEX `fk_tb_demands_tb_eixos1_idx` (`tb_eixos_id` ASC) VISIBLE,
  CONSTRAINT `fk_tb_demands_tb_progress1`
    FOREIGN KEY (`tb_progress_id`)
    REFERENCES `mydb`.`tb_progress` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_demands_tb_objective1`
    FOREIGN KEY (`tb_objective_id`)
    REFERENCES `mydb`.`tb_objective` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_demands_tb_eixos1`
    FOREIGN KEY (`tb_eixos_id`)
    REFERENCES `mydb`.`tb_eixos` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_timeFinish`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_timeFinish` (
  `id` VARCHAR(40) NOT NULL,
  `period` VARCHAR(7) NOT NULL,
  `time` INT NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_author`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_author` (
  `id` VARCHAR(40) NOT NULL,
  `name` VARCHAR(30) NOT NULL,
  `phone` INT NOT NULL,
  `nickname` VARCHAR(15) NOT NULL,
  `password` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_step`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_step` (
  `id` VARCHAR(40) NOT NULL,
  `date` TIMESTAMP NOT NULL,
  `ModifyTitle` VARCHAR(60) NOT NULL,
  `tb_timeFinish_id` VARCHAR(40) NOT NULL,
  `tb_author_id` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_tb_step_tb_timeFinish_idx` (`tb_timeFinish_id` ASC) VISIBLE,
  INDEX `fk_tb_step_tb_author1_idx` (`tb_author_id` ASC) VISIBLE,
  CONSTRAINT `fk_tb_step_tb_timeFinish`
    FOREIGN KEY (`tb_timeFinish_id`)
    REFERENCES `mydb`.`tb_timeFinish` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_step_tb_author1`
    FOREIGN KEY (`tb_author_id`)
    REFERENCES `mydb`.`tb_author` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_progress_has_tb_step`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_progress_has_tb_step` (
  `tb_progress_id` VARCHAR(40) NOT NULL,
  `tb_step_id` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`tb_progress_id`, `tb_step_id`),
  INDEX `fk_tb_progress_has_tb_step_tb_step1_idx` (`tb_step_id` ASC) VISIBLE,
  INDEX `fk_tb_progress_has_tb_step_tb_progress1_idx` (`tb_progress_id` ASC) VISIBLE,
  CONSTRAINT `fk_tb_progress_has_tb_step_tb_progress1`
    FOREIGN KEY (`tb_progress_id`)
    REFERENCES `mydb`.`tb_progress` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_progress_has_tb_step_tb_step1`
    FOREIGN KEY (`tb_step_id`)
    REFERENCES `mydb`.`tb_step` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_city`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_city` (
  `id` VARCHAR(40) NOT NULL,
  `name` VARCHAR(30) NOT NULL,
  `state` VARCHAR(25) NOT NULL,
  `uf` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE)
ENGINE = InnoDB;


-- -----------------------------------------------------
-- Table `mydb`.`tb_budget`
-- -----------------------------------------------------
CREATE TABLE IF NOT EXISTS `mydb`.`tb_budget` (
  `id` VARCHAR(40) NOT NULL,
  `value` FLOAT NOT NULL,
  `createAt` DATETIME NOT NULL,
  `area` VARCHAR(100) NOT NULL,
  `numberInvolved` INT NOT NULL,
  `tb_city_id` VARCHAR(40) NOT NULL,
  `tb_timeFinish_id` VARCHAR(40) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE,
  INDEX `fk_tb_budget_tb_city1_idx` (`tb_city_id` ASC) VISIBLE,
  INDEX `fk_tb_budget_tb_timeFinish1_idx` (`tb_timeFinish_id` ASC) VISIBLE,
  CONSTRAINT `fk_tb_budget_tb_city1`
    FOREIGN KEY (`tb_city_id`)
    REFERENCES `mydb`.`tb_city` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION,
  CONSTRAINT `fk_tb_budget_tb_timeFinish1`
    FOREIGN KEY (`tb_timeFinish_id`)
    REFERENCES `mydb`.`tb_timeFinish` (`id`)
    ON DELETE NO ACTION
    ON UPDATE NO ACTION)
ENGINE = InnoDB;


SET SQL_MODE=@OLD_SQL_MODE;
SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS;
SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS;