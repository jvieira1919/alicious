// Dependencies
const mysql = require("mysql");
// Set the port of our application
// process.env.PORT lets the port be set by Heroku

// MySQL DB Connection Information
//const connection;

if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "password",
  database: "burgers_db",
})
};
// Initiating MySQL Connection.
connection.connect((err) => {
  if (err) {
    console.error("error connecting " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

module.exports = connection;
