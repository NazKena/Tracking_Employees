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
        { name: "Finish", value: "Finish" },
      ],
    },
  ]).then((res) => {
    let choice = res.choice;
    switch (choice) {
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
      default:
        Finish();
    }
  });
}
openingQuestion();

function viewAllDepartments() {
  db.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    console.table(res);
    openingQuestion();
  });
}

function viewAllRoles() {
  db.query("SELECT * FROM role", (err, res) => {
    if (err) throw err;
    console.table(res);
    openingQuestion();
  });
}

function viewAllEmployees() {
  db.query("SELECT * FROM employee", (err, res) => {
    if (err) throw err;
    console.table(res);
    openingQuestion();
  });
}

function addDepartment() {
  inquirer
    .prompt([
      {
        type: "input",
        name: "choice",
        message: "Enter Department's name here",
      },
    ])

    .then((res) => {
      let answer = res.choice;
      db.query(
        "INSERT INTO department (name) VALUES (?)",
        [answer],
        (err, res) => {
          if (err) throw err;
        }
      );
      openingQuestion();
    });
}

function addRole() {
  let departmentID = [];
  let departmentName = [];
  db.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    let departmentlist = [];
    res.forEach((dept) => {
      departmentlist.push({
        name: dept.name,
        value: dept.id,
      });
    });
    addNewRole(departmentlist);
  });
}

function addNewRole(departmentlist) {
  inquirer
    .prompt([
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
        type: "list",
        name: "department",
        message: "Which department does the role belong top?",
        choices: departmentlist,
      },
    ])
    .then(({ roleName, salary, department }) => {
      db.query(
        `INSERT INTO role (title,department_id,salary) VALUES ("${roleName}",${department},${salary});`,
        function (err, data) {
          if (err) throw err;
          console.table(data);
          openingQuestion();
        }
      );
    });
}


function addEmployee() {
  let departmentID = [];
  let departmentName = [];
  db.query("SELECT * FROM department", (err, res) => {
    if (err) throw err;
    let departmentlist = [];
    res.forEach((dept) => {
      departmentlist.push({
        name: dept.name,
        value: dept.id,
      });
    });
    addNewEmployee(departmentlist);
  });
}

function addNewEmployee(departmentlist) {
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
  ])

    .then(({ firstName, lastName, role, manager }) => {
      db.query(
        `INSERT INTO role (first_name,last_name,role_id, manager_id) VALUES (${firstName},${lastName},${role},${manager});`,
        function (err, data) {
          if (err) throw err;
          console.table(data);
          openingQuestion();
        }
      );
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
}

function Finish() {
  console.log("Thank you for using Employee Tracker!");
  db.end();
  process.exit(0);
}
