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
        <link rel="stylesheet" src="dist/style.css" />
    </head>
    <body>
        <header>
            <h1> 's Web Development Team</h1>
        </header>
        <main class="row justify-content-center">
            <article class="card col-3 m-2">
             <div class="card-header background">
                <h2></h2>
                <h4>Manager</h4>
             </div>
             <div class="card-body">
             <p>Employee ID: </p>
             <p>Email: <a href=mailto:"name"></a></p>
             <p>Office Number: </p>
            </div>
            </article>
        </main>
    </body>
    </html>
    `
}
module.exports = generateHype()