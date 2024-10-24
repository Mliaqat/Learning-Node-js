const mysql = require("mysql2");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "node",
  password: "Qwert",
});

module.exports = pool.promise();
