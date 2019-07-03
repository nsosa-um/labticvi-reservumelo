"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconnection_1 = __importDefault(require("../dbconnection"));
const Autor_1 = __importDefault(require("../dtos/Autor"));
const getAutorByID = (id) => {
    // const query = "SELECT * FROM Autores WHERE idAutor = 1";
    let query;
    let args;
    if (id) {
        query = 'SELECT * FROM Autores WHERE idAutor = ?';
        args = [id];
    }
    else {
        query = 'SELECT * FROM Autores';
    }
    return new Promise((resolve, reject) => {
        dbconnection_1.default.query(query, args, (err, autor_res) => {
            if (err) {
                reject(err);
                return;
            }
            const autor = new Autor_1.default(autor_res[0].idAutor, autor_res[0].nombreCompleto);
            resolve(autor);
        });
    });
};
exports.default = getAutorByID;
//# sourceMappingURL=autoresDAO.js.map