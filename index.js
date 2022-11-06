const inquirer = require('inquirer')
const fs = require('fs')
const generateHTML = require('./src/generateHTML')




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
