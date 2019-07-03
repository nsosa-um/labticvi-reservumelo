"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const dbconnection_1 = __importDefault(require("../dbconnection"));
const Editorial_1 = __importDefault(require("../dtos/Editorial"));
const getEditorial = (id, nombre) => {
    let args;
    let query;
    if (id) {
        query = "SELECT * FROM Editoriales WHERE idEditorial = ?";
        args = [id];
    }
    else if (nombre) {
        query = "SELECT * FROM Editoriales WHERE nombre = ?";
        args = [nombre];
    }
    return new Promise((resolve, reject) => {
        dbconnection_1.default.query(query, args, (err, editorial_res) => {
            if (err) {
                reject(err);
                return;
            }
            const editorial = new Editorial_1.default(editorial_res[0].idEditorial, editorial_res[0].nombre);
            resolve(editorial);
        });
    });
};
exports.default = getEditorial;
//# sourceMappingURL=editorialesDAO.js.map