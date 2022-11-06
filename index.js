const inquirer = require("inquirer")
const fs = require("fs")
const generateHTML = require("./src/generateHTML")
const Manager = require("./lib/Manager")
const Intern = require("./lib/Intern")
const Engineer = require("./lib/Engineer")
const { profile } = require("console")

function Profile() {
  this.employeeArr = []
  this.employee
}

Profile.prototype.startPrompt = function() {
  inquirer.prompt([
    {
      type: "text",
      message: "Enter team manager's name.",
      name: "name"
    },
    {
      type: "text",
      message: "Enter team manager's ID number.",
      name: "id"
    },
    {
      type: "input",
      message: "Enter team manager's email address.",
      name: "email"
    },
    {
      type: "text",
      message: "Enter team manager's office number.",
      name: "office"
    },
  ])

  .then(({ name, id, email, office}) => {
    this.employee = new Manager(name, id, email, office)
    this.employee.role = this.employee.getRole()
    this.employeeArr.push(this.employee)
    this.secondPrompt()
  })
};

Profile.prototype.secondPrompt = function() {
  inquirer.prompt({
    type: "checkbox",
    message: "Add more team members",
    choices: ['Engineer', 'Intern', 'Finish'],
    name: "name"
  })

  .then(({add}) => {
    if(add === 'Engineer') {
      this.EngineerPrompt()
    } else if (add === 'Intern'){
      this.internPrompt()
    } else {this.writePage()
    }
  })
}

Profile.prototype.internPrompt = function() {
  inquirer.prompt(
    {
    type: "text",
    message: "Enter intern's name.",
    name: "name"
    },
    {
      type: "text",
      message: "Enter intern's ID number.",
      name: "id"
    },
    {
      type: "text",
      message: "Enter intern's email.",
      name: "email"
    },
    {
      type: "text",
      message: "Enter intern's school.",
      name: "school"
    })

    .then(({ name, id, email, school }) => {
      this.employee = new Intern(name, id, email, school)
      this.employee.role = this.employee.getRole()
      this.employeeArr.push(this.employee)
      this.secondPrompt()
    })
}