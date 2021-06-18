-- este archivo es para crear la base y las tablas. en mi caso lo hago desde el portal de admin de phpmyadmin

-- creando la base de datos

CREATE DATABASE crudsqlcimple;

-- utilizando la base de datos

USE crudsqlcimple;

-- creac una tabla

CREATE TABLE customer (
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,  -- UNSIGNED => sin nros negativo
    name VARCHAR(50) NOT NULL,
    address VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- MOSTRAR las tablas
SHOW TABLES;

-- para describir la tabla
describe customer;