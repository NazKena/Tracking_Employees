const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const { prompt } = require("inquirer");
const db = require("./db/connection.js");

function openingQuestion() {
  prompt([
    {
      type: "list",
      name: "choice",
      message: "What would you like to do?",
      choices: [
        {
          name: "View All Departments",
          value: "viewAllDepartments",
        },
        {
          name: "View All Employees",
          value: "viewAllEmployees",
        },
        {
          name: "View All Roles",
          value: "viewAllRoles",
        },
        {
          name: "Add A Department",
          value: "addDepartment",
        },
        {
          name: "Add A Role",
          value: "addRole",
        },
        {
          name: "Add An Employee",
          value: "addEmployee",
        },
        { name: "Quit", value: "Quit" },
      ],
    },
  ]);
}

