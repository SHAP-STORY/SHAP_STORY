"user strict";

var mysql = require('mysql');

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3333,
  password: '암호',
  database: "story"
});

db.connect();

module.exports = db;
