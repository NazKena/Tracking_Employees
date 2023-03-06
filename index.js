const inquirer = require("inquirer");
const mysql = require("mysql2");
const cTable = require("console.table");
const { prompt } = require("inquirer");
const db = require("./db/connection.js");

const teamArray = [];

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

  function addDepartment() {
    inquirer.prompt([
      {
        type: "input",
        name: "departmentName",
        message: "Enter Department's name here",
      },
    ]);

    then((answers) => {
      const department = new Department
      (answers.departmentName);
      teamArray.push(department);
      init();
    });
  }

  function addRole() {
    inquirer.prompt([
      {
        type: "input",
        name: "roleName",
        message: "Enter the name of role here",
      },

      {
        type: "input",
        name: "salary",
        message: "Enter salary for role here",
      },

      {
        type: "input",
        name: "department",
        message: "Which department does the role belong top?",
      },
    ]);

    then((answers) => {
      const role = new Role(
        answers.roleName,
        answers.salary,
        answers.department
      );
      teamArray.push(role);
      init();
    });
  }

  function addEmployee() {
    inquirer.prompt([
      {
        type: "input",
        name: "firstName",
        message: "Enter the first name of employee here",
      },

      {
        type: "input",
        name: "lastName",
        message: "Enter the last name of employee here",
      },

      {
        type: "input",
        name: "role",
        message: "What is the employee's role?",
      },
      {
        type: "input",
        name: "manager",
        message: "What is the employee's manager?",
      },
    ]);

    then((answers) => {
      const employee = new Employee(
        answers.firstName,
        answers.lastName,
        answers.role,
        answers.manager
      );
      teamArray.push(employee);
      init();
    });
  }
  function init() {
    inquirer.prompt([
      {
        type: "list",
        name: "mainSelection",
        message: "What would you like to do?",
        choices: [
          "View All Departments",
          "View All Employees",
          "View All Roles",
          "Add A Department",
          "Add A Role",
          "Add An Employee",
          "Quit",
        ],
      },
    ]);

    then((answer) => {
      switch (answer.roles) {
        case "viewAllDepartments":
          viewAllDepartments();
          break;
        case "viewAllRoles":
          viewAllRoles();
          break;
        case "viewAllEmployees":
          viewAllEmployees();
          break;
        case "viewAllEmployees":
          viewAllEmployees();
          break;
        case "addDepartment":
          addDepartment();
          break;
        case "addRole":
          addRole();
          break;
        case "addEmployee":
          addEmployee();
          break;
        case "Finish":
          addFinish();
          break;
      }
    });
  }
}

