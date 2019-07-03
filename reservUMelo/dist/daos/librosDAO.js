"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconnection_1 = __importDefault(require("../dbconnection"));
const Libro_1 = __importDefault(require("../dtos/Libro"));
const libros = (idEjemplar, nombreLibro, nombreAutor, estado, nombreEditorial) => {
    let query;
    let args;
    if (nombreLibro) {
        query = "SELECT * FROM Libros WHERE nombre = ?";
        args = [nombreLibro];
    }
    else if (nombreAutor) {
        query = "SELECT * FROM Libros INNER JOIN AutoresLibros ON Libros.idLibro = AutoresLibros.idLibro INNER JOIN Autores ON AutoresLibros.idAutor = Autores.idAutor WHERE Autores.nombreCompleto = ?";
        args = [nombreAutor];
    }
    else if (nombreEditorial) {
        query = "SELECT * FROM Libros INNER JOIN Editoriales ON Libros.idEditorial = Editoriales.idEditorial WHERE Editoriales.nombre = ?";
        args = [nombreEditorial];
    }
    else {
        query = "SELECT * FROM Libros";
    }
    return new Promise((resolve, reject) => {
        dbconnection_1.default.query(query, args, (err, results) => {
            if (err) {
                reject(err);
                return;
            }
            const toReturn = [];
            for (const result of results) {
                console.log(result);
                const newLibro = new Libro_1.default(result.idLibro, /* result.idEditorial,*/ result.nombre, result.generos);
                toReturn.push(newLibro);
            }
            resolve(toReturn);
        });
    });
};
exports.libros = libros;
//# sourceMappingURL=librosDAO.js.map