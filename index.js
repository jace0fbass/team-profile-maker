const inquirer = import("inquirer");
const fs = import("fs");
const generateHTML = require("./src/generateHTML");
const Manager = require("./lib/Manager");
const Intern = require("./lib/Intern");
const Engineer = require("./lib/Engineer");

const employeeArr = [];

const startPrompt = () => {
  inquirer.prompt([
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

    .then(({ name, id, email, office }) => {
      this.employee = new Manager(name, id, email, office);
      this.employee.role = this.employee.getRole();
      this.employeeArr.push(this.employee);
      this.secondPrompt();
    });
};

const secondPrompt = () => {
  inquirer.prompt({
      type: "checkbox",
      message: "Add more team members",
      choices: ["Engineer", "Intern", "Finish"],
      name: "name",
    })

    .then(({ add }) => {
      if (add === "Engineer") {
        this.EngineerPrompt();
      } else if (add === "Intern") {
        this.internPrompt();
      } else {
        this.writePage();
      }
    });
};

const internPrompt = () => {
  inquirer.prompt([
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
};

const engineerPrompt = () => {
  inquirer.prompt([
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
};

const writePage = () => {
  const pageHTML = generateHTML(this.employeeArr);
  fs.writeFile("./dist/index.html", pageHTML, (err) => {
    if (err) throw err;
  });
};

startPrompt();
