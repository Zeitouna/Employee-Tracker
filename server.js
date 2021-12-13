const inquirer = require("inquirer")
const mysql = require("mysql2")
const cTable = require('console.table');

// creating connection to db
const db = mysql.createConnection({
    host: "localhost",
    user: "root",
    database: "employee_db",
  });
module.exports = db;


connection.connect(function(err) {
    if (err) throw err
    console.log("Connected as Id" + connection.threadId)
    startPrompt();
});

//Questions and choices

const showMainMenu = () => {
    inquirer
      .prompt([
        {
          type: "list",
          message: "What would you like to do?",
          name: "choice",
          choices: [
            {
              name: "View all employees employees",
              value: 1,
            },
            {
              name: "Add employee",
              value: 2,
            },
            {
              name: "Update Employee Role",
              value: 3,
            },
            {
              name: "View All Roles",
              value: 4,
            },
            {
              name: "Add Role",
              value: 5,
            },
            {
              name: "View All Departments",
              value: 6,
            },
            {
              name: "Add Department",
              value: 7,
            },
          ],
        },
      ])
      .then((data) => {
        switch (data.choice) {
          case 1:
            console.log("View all employees employees");
            showEmployees();
            break;
          case 2:
            console.log("Add employee");
            break;
          case 3:
            console.log("Update Employee Role");
            break;
          case 4:
            console.log("View All Roles");
            break;
          case 5:
            console.log("Add Role");
            break;  
          case 6:
            console.log("View All Departments");
            break;
          case 7:
          console.log("Add Department");
            break;
          default:
            console.log("Quit");
            close();
            break;
        }
      });
  };

  showMainMenu();

//   Show all employees

const showEmployees = () => {
    //Retrieve data from db
    connection.query("SELECT employee.first_name, employee.last_name, role.title, role.salary, department.name, CONCAT(e.first_name, ' ' ,e.last_name) AS Manager FROM employee INNER JOIN role on role.id = employee.role_id INNER JOIN department on department.id = role.department_id left join employee e on employee.manager_id = e.id;", 
    function(err, res) {
      if (err) throw err
      console.table(res)
      showMainMenu()
  })
}

