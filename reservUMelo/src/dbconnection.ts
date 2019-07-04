const mysql = require('mysql')

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'bingo123',
    database: 'biblioteca'
})

export default connection;