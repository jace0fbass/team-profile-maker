const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML = require('./src/generateHTML')
const Manager = require('./lib/Manager')
const Intern = require('./lib/Intern')
const Engineer = require('./lib/Engineer')



inquirer.prompt([
  {
    type: "checkbox",
    message: "Select ID",
    choices: ["Manager", "Employee", "Engineer", "Intern"],
    name: "id",
  },
  {
    type: "input",
    message: "Enter full name",
    name: "name,",
  },
  {
    type: "input",
    message: "Enter email address",
    name: "email",
  },
]);
