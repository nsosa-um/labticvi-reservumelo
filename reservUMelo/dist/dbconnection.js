"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mysql = require('mysql');
const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bingo123',
    database: 'biblioteca'
});
exports.default = connection;
//# sourceMappingURL=dbconnection.js.map