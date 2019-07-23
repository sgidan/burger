var mysql = require("mysql");

var PORT = process.env.PORT || 3080;

var connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password: "haters82",
    database: "burgers_db"
  });
  
  connection.connect(function (err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }

});

module.exports = connection; ///is this right???