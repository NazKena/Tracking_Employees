const mysql = require("mysql2");

const connection = mysql.createConnection({
    host: "localhost",
    port: 3306,
    user: "root",
    password:"password",
    database: "employee_DB",
},

console.log(`Connected to the employee tracker databse.`)
);

module.exports = connection
