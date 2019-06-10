drop database if exists biblioteca;
create database biblioteca;
use biblioteca;

CREATE TABLE `Usuarios` (
  `idUsuario` int not null auto_increment,
  `nombreCompleto` nvarchar(50),
  `tipo` bit,
  `cedula` nvarchar(8),
  `fchNacimiento` date,
  `direccion` nvarchar(50),
  `email` nvarchar(100) not null,
  `password` nvarchar(100) not null,
  PRIMARY KEY (`idUsuario`)
);

CREATE TABLE `Autores` (
  `idAutor` int not null auto_increment,
  `nombreCompleto` nvarchar(50),
  PRIMARY KEY (`idAutor`)
);

CREATE TABLE `Editoriales` (
  `idEditorial` int not null auto_increment,
  `nombre` nvarchar(50),
  PRIMARY KEY (`idEditorial`)
);

CREATE TABLE `Libros` (
  `idLibro` int not null auto_increment,
  `idEditorial` int not null,
  `nombre` nvarchar(100),
  `generos` nvarchar(50),
  PRIMARY KEY (`idLibro`),
  FOREIGN KEY (`idEditorial`) REFERENCES `Editoriales` (`idEditorial`)
);

CREATE TABLE `Ejemplares` (
  `idEjemplar` int not null auto_increment,
  `idLibro` int not null,
  `edicion` nvarchar(20),
  PRIMARY KEY (`idEjemplar`),
  FOREIGN KEY (`idLibro`) REFERENCES `Libros` (`idLibro`)
);

CREATE TABLE `AutoresLibros` (
  `idLibro` int not null,
  `idAutor` int not null,
  PRIMARY KEY (`idLibro`, `idAutor`),
  FOREIGN KEY (`idLibro`) REFERENCES `Libros` (`idLibro`),
  FOREIGN KEY (`idAutor`) REFERENCES `Autores` (`idAutor`)
);

CREATE TABLE `Reservas` (
  `idUsuario` int not null,
  `idEjemplar` int not null,
  `fchReserva` date,
  `fchDevolucion` date,
  PRIMARY KEY (`idUsuario`,`idEjemplar`),
  FOREIGN KEY (`idUsuario`) REFERENCES `Usuarios` (`idUsuario`),
  FOREIGN KEY (`idEjemplar`) REFERENCES `Ejemplares` (`idEjemplar`)
);
