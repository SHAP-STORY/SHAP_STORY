var mysql = require('mysql')

var db = mysql.createConnection({
  host: "localhost",
  user: "root",
  port: 3306,
  password : '',
  database: "story"
});

db.connect();

module.exports = db;