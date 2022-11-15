// gathers info on employee to decide which profile to create for them
function renderCards(employeeArr) {
  console.log(employeeArr);
  return employeeArr
    .map((employee) => {
      let additionalInfo = "";
      if(employee.getRole() === "Manager") {
        additionalInfo = `Office number: ` + employee.office
      } else if (employee.getRole() === "Engineer") {
        additionalInfo = `Github: <a href="https://github.com/` + employee.github + `/">` + employee.github + `</a>`
      } else if (employee.getRole() === "Intern") {
        additionalInfo = `School: ` + employee.school
      }
      console.log(employee);
      return `<article class="card col-3 m-2">
        <div class="card-header background">
            <h2>${employee.getName()}</h2>
            <h4>${employee.getRole()}</h4>
        </div>
        <div class="card-body">
            <p>Employee ID: ${employee.id}</p>
            <p>Email: <a href="mailto:${employee.email}">${employee.email}</a></p>
           <p>${additionalInfo}</p>
        </div>
        </article>`;
    })
    .join("");
}
// generates main html file
const generateHTML = (employeeArr) => {
  return `
    <!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>Team Profile Generator</title>
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-Zenh87qX5JnK2Jl0vWa8Ck2rdkQ2Bzep5IDxbcnCeuOxjzrPF/et3URy9Bv1WTRi" crossorigin="anonymous">
        <link rel="stylesheet" href="./style.css" />
    </head>
    <body>
        <header>
            <h1>${employeeArr[0].getName()}'s Web Development Team</h1>
        </header>
        <main class="row justify-content-center">
            ${renderCards(employeeArr)}
        </main>
    </body>
    </html>
    `;
};
module.exports = generateHTML;
