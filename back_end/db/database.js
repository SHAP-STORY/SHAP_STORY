var mysql = require('mysql')

var db = mysql.createConnection({
  host: "story-database.cxuhc9hooyfo.us-west-1.rds.amazonaws.com",
  user: "user",
  port: 3306,
  password : 'lchy0413',
  database: "story"
});

db.connect();
module.exports = db;