// gathers info on employee to decide which profile to create for them
function renderCard(employeeArr) {
  let cardArr = [];
  for (i = 0; i < employeeArr.length; i++) {
    let answer;
    if (employeeArr[i].getRole() === "Manager") {
      answer = "Office Number: " + employeeArr[i].getOffice();
    } else if (employeeArr[i].getRole() === "Engineer") {
      answer =
        'Github: <a href="https://github.com/' +
        employeeArr[i].getGithub() + '">' +
        employeeArr[i].getGithub() +
        "</a>";
    } else if (employeeArr[i].getRole() === "Intern") {
      answer = "School: " + employeeArr[i].getSchool();
    }
    // dynamically creates employee cards with entered info
    let employeeCard = `
        <article class="card col-3 m-2">
        <div class="card-header background">
            <h2>${employeeArr[i].getName()}</h2>
            <h4>${employeeArr[i].getRole}</h4>
        </div>
        <div class="card-body">
            <p>Employee: ID: ${employeeArr[i].getId()}</p>
            <p>Email: <a href=mailto:"${employeeArr[i].getEmail()}">${
      employeeArr[i].getEmail
    }</a></p>
            <p>${answer}</p>
        </div>
        </article>
        `;
    cardArr.push(employeeCard);
  }
  return cardArr.join("");
}
// generates main html file
function generateHype(employeeArr) {
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
            <h1>${employeeArr[0].name}'s Web Development Team</h1>
        </header>
        <main class="row justify-content-center">
            ${renderCard(employeeArr)}
        </main>
    </body>
    </html>
    `;
}
export default generateHype;
