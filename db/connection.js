const mysql = require("mysql2");

const db = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"ABC",
    database: "employees_db",
},

console.log(`Connected to the employee tracker databse.`)
);

module.exports = connection
