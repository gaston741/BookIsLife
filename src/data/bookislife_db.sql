CREATE SCHEMA `bookislife_db` ;

CREATE TABLE `bookislife_db`.`rols` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));

CREATE TABLE `bookislife_db`.`users` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  `email` VARCHAR(45) NOT NULL,
  `password` VARCHAR(255) NOT NULL,
  `rol_id` INT UNSIGNED NOT NULL,
  `avatar` VARCHAR(100) NOT NULL,
  `date` DATE NULL DEFAULT NULL,
  `tel` INT UNSIGNED NULL,
  PRIMARY KEY (`id`));
  
  
  CREATE TABLE `bookislife_db`.`genres` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `bookislife_db`.`publishers` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `bookislife_db`.`languages` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `bookislife_db`.`autors` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `surname` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
CREATE TABLE `bookislife_db`.`categories` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE IF NOT EXISTS `bookislife_db`.`products` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(45) NOT NULL,
  `autor_id` INT UNSIGNED NOT NULL,
  `price` INT NOT NULL,
  `description` VARCHAR(255) NOT NULL,
  `publisher_id` INT UNSIGNED NOT NULL,
  `genre_id` INT UNSIGNED NOT NULL,
  `language_id` INT UNSIGNED NOT NULL,
  `category_id` INT UNSIGNED NOT NULL,
  `created_at` TIMESTAMP NULL DEFAULT NULL,
  `updated_at` TIMESTAMP NULL DEFAULT NULL,
  `deleted_at` TIMESTAMP NULL,
  PRIMARY KEY (`id`));
  
  CREATE TABLE `bookislife_db`.`images` (
  `id` INT UNSIGNED NOT NULL AUTO_INCREMENT,
  `name` VARCHAR(100) NOT NULL,
  `product_id` INT UNSIGNED NULL,
  PRIMARY KEY (`id`));
  
  ALTER TABLE `bookislife_db`.`images` 
ADD INDEX `FK_product_id_idx` (`product_id` ASC) VISIBLE;
;
ALTER TABLE `bookislife_db`.`images` 
ADD CONSTRAINT `FK_product_id`
  FOREIGN KEY (`product_id`)
  REFERENCES `bookislife_db`.`products` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
  
  ALTER TABLE `bookislife_db`.`products` 
ADD INDEX `FK_genre_id_idx` (`genre_id` ASC) VISIBLE,
ADD INDEX `FK_publisher_id_idx` (`publisher_id` ASC) VISIBLE,
ADD INDEX `FK_language_id_idx` (`language_id` ASC) VISIBLE,
ADD INDEX `FK_autor_id_idx` (`autor_id` ASC) VISIBLE,
ADD INDEX `FK_category_id_idx` (`category_id` ASC) VISIBLE;
;
ALTER TABLE `bookislife_db`.`products` 
ADD CONSTRAINT `FK_genre_id`
  FOREIGN KEY (`genre_id`)
  REFERENCES `bookislife_db`.`genres` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `FK_publisher_id`
  FOREIGN KEY (`publisher_id`)
  REFERENCES `bookislife_db`.`publishers` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `FK_language_id`
  FOREIGN KEY (`language_id`)
  REFERENCES `bookislife_db`.`languages` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `FK_autor_id`
  FOREIGN KEY (`autor_id`)
  REFERENCES `bookislife_db`.`autors` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION,
ADD CONSTRAINT `FK_category_id`
  FOREIGN KEY (`category_id`)
  REFERENCES `bookislife_db`.`categories` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;

ALTER TABLE `bookislife_db`.`users` 
ADD INDEX `FK_rol_id_idx` (`rol_id` ASC) VISIBLE;
;
ALTER TABLE `bookislife_db`.`users` 
ADD CONSTRAINT `FK_rol_id`
  FOREIGN KEY (`rol_id`)
  REFERENCES `bookislife_db`.`rols` (`id`)
  ON DELETE NO ACTION
  ON UPDATE NO ACTION;
