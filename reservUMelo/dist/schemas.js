"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const apollo_server_1 = require("apollo-server");
const schema = apollo_server_1.makeExecutableSchema({
    typeDefs: apollo_server_1.gql `  
  type Usuario {
    id: ID!,
    nombreCompleto: String,
    email: String!,
    password: String!,
    tipo: Boolean,
    cedula: String,
    fchNacimiento: String,
    direccion: String,
    reservas: [Reserva]
  }

  type Autor {
    id: ID!,
    nombreCompleto: String,
    libros: [Libro]
  }

  type Editorial {
    id: ID!,
    nombre: String
  }

  type Libro {
    id: ID!,
    editorial: Editorial!,
    nombre: String!,
    generos: String,
    autores: [Autor]!
  }

  type Ejemplar {
    id: ID!,
    libro: Libro!,
    edicion: String,
    reservas: [Reserva]
  }

  type Reserva {
    id: ID!,
    usuario: Usuario!,
    ejemplar: Ejemplar!,
    fchReserva: String!,
    fchDevolucion: String
  }

  type Query {
    getAutorByID(id: Int): Autor,
    libros(nombreLibro: String, nombreAutor: String, estado: Boolean, nombreEditorial: String, idEjemplar: ID): [Libro]
  }

  type Mutation {
    eliminarLibro(id: String!): Libro!
  }
`
});
const schemas = [schema];
exports.default = schemas;
//# sourceMappingURL=schemas.js.map