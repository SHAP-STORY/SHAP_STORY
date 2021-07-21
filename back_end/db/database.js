"user strict";

var mysql = require('mysql');
var conn = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    port: '3333',
    password: '암호',
    database: 'story'
});

conn.connect();

module.exports = conn;
