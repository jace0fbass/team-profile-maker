const inquirer = require("inquirer");
const fs = require("fs");
const generateHTML = require("./src/generateHTML.js");
const Manager = require("./lib/Manager.js");
const Intern = require("./lib/Intern.js");
const Engineer = require("./lib/Engineer.js");
// import inquirer from "inquirer";
// import fs from "fs";
// import generateHTML from "./src/generateHTML.js";
// import Manager from "./lib/Manager.js";
// import Intern from "./lib/Intern.js";
// import Engineer from "./lib/Engineer.js";

// was in a cs5 function Profile() need to work into cs6 or just put it all back to cs5?
// function Profile(
//   startPrompt,
//   secondPrompt,
//   internPrompt,
//   engineerPrompt,
//   writePage
// ) {
//   this.startPrompt = startPrompt();
//   this.secondPrompt = secondPrompt();
//   this.internPrompt = internPrompt();
//   this.engineerPrompt = engineerPrompt();
//   this.writePage = writePage();
//   this.employeeArr = [];
//   this.employee;
// }
// starts the prompts with manager info
let employeeArr = [];

// starts second prompt
function secondPrompt() {
  inquirer
    .prompt({
      type: "list",
      message: "Add more team members",
      choices: ["Engineer", "Intern", "Finish"],
      name: "emp",
    })

    .then(({ emp }) => {
      if (emp === "Engineer") {
        engineerPrompt();
      } else if (emp === "Intern") {
        internPrompt();
      } else {
        writePage();
      }
    });
}




function startPrompt() {
  inquirer
    .prompt([
      {
        type: "text",
        message: "Enter team manager's name.",
        name: "name",
      },
      {
        type: "text",
        message: "Enter team manager's ID number.",
        name: "id",
      },
      {
        type: "input",
        message: "Enter team manager's email address.",
        name: "email",
      },
      {
        type: "text",
        message: "Enter team manager's office number.",
        name: "office",
      },
    ])
    // pushes entered info into employee and starts the next prompt
    .then((name, id, email, office) => {
      let employee = new Manager(name, id, email, office);
      employeeArr.push(employee);
      secondPrompt();
    });
}

// prompts for intern info
function internPrompt() {
  inquirer
    .prompt([
      {
        type: "text",
        message: "Enter intern's name.",
        name: "name",
      },
      {
        type: "text",
        message: "Enter intern's ID number.",
        name: "id",
      },
      {
        type: "text",
        message: "Enter intern's email.",
        name: "email",
      },
      {
        type: "text",
        message: "Enter intern's school.",
        name: "school",
      },
    ])

    .then(({ name, id, email, school }) => {
      this.employee = new Intern(name, id, email, school);
      this.employee.role = this.employee.getRole();
      this.employeeArr.push(this.employee);
      this.secondPrompt();
    });
}
// prompts for engineer info
function engineerPrompt() {
  inquirer
    .prompt([
      {
        type: "text",
        message: "Enter engineer's name.",
        name: "name",
      },
      {
        type: "text",
        message: "Enter engineer's ID number.",
        name: "id",
      },
      {
        type: "text",
        message: "Enter engineer's email",
        name: "email",
      },
      {
        type: "text",
        message: "Enter engineer's Github username.",
        name: "github",
      },
    ])
    .then(({ name, id, email, github }) => {
      this.employee = new Engineer(name, id, email, github);
      this.employee.role = this.employee.getRole();
      this.employeeArr.push(this.employee);
      this.secondPrompt();
    });
}
// writes generated html page
function writePage() {
  const pageHTML = generateHTML(employeeArr);
  fs.writeFile("./dist/index.html", pageHTML, (err) => {
    if (err) throw err;
  });
}

startPrompt();
