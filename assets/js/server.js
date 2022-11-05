import jest from "jest"
import inquirer from "inquirer"

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
        name: "name,"
    },
    {
        type: "input",
        message: "Enter email address",
        name: "email"
    },
])