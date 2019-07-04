"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const librosDAO_1 = require("../daos/librosDAO");
const libroResolver = {
    Query: {
        libros: (_, { nombreLibro, nombreAutor, estado, nombreEditorial, idEjemplar }) => {
            return librosDAO_1.libros(idEjemplar, nombreLibro, nombreAutor, estado, nombreEditorial);
        }
    },
    Mutation: {
        agregarLibro: (_, { idEditorial, nombre, generos }) => {
            return librosDAO_1.agregarLibro(idEditorial, nombre, generos);
        }
    }
};
exports.default = libroResolver;
//# sourceMappingURL=resolverLibros.js.map