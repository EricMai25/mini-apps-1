const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'mysql123',
    database: 'Checkout'

})
connection.connect()

module.exports = connection