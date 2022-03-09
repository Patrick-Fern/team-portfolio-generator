function generateCard(data) {
    // console.log(data);
    let pageElements = []

    for (i = 0; i < data.length; i++) {
        let employee = data[i];
        switch (employee.type) {
            case "manager":
                pageElements[i] = `
                <div class="card  mb-3" style="max-width: 18rem;">
                    <div class="card-header text-white bg-primary">
                        <h5>${employee.name}</h5>
                        <h6>Manager</h6>
                    </div>
                    <div class="card-body text-dark bg-light">    
                        <p class="card-text">ID: ${employee.id} </p>
                        <p class="card-text">Email: <a href="mailto:${employee.email}"> ${employee.email}</a></p>
                        <p class="card-text">Office number: ${employee.officeNumber}
                    </div>
                </div>
                `;
                break;
            case "engineer":
                pageElements[i] = `
                <div class="card  mb-3" style="max-width: 18rem;">
                    <div class="card-header text-white bg-primary">
                        <h5>${employee.name}</h5>
                        <h6>Engineer</h6>
                    </div>
                    <div class="card-body text-dark bg-light">    
                        <p class="card-text">ID: ${employee.id} </p>
                        <p class="card-text">Email: <a href="mailto:${employee.email}"> ${employee.email}</a></p>
                        <p class="card-text">GitHub: <a target="_blank" href="https://github.com/${employee.github}"> ${employee.github} </a></p>
                    </div>
                </div>
                `;
                break;
            case "intern":
                pageElements[i] = `
                <div class="card  mb-3" style="max-width: 18rem;">
                    <div class="card-header text-white bg-primary">
                        <h5>${employee.name}</h5>
                        <h6>Intern</h6>
                    </div>
                    <div class="card-body text-dark bg-light">    
                        <p class="card-text">ID: ${employee.id} </p>
                        <p class="card-text">Email: <a href="mailto:${employee.email}"> ${employee.email}</a></p>
                        <p class="card-text">School: ${employee.school} </p>
                    </div>
                </div>
                `
                break;
        };
    };
    return pageElements;
};
 





async function generatePage(data) {
   const cards = generateCard(data);
    return `
    <!DOCTYPE html> 
    <html lang="en"> 

    <head>
      <meta charset="UTF-8">
      <meta name="viewport" content="width=device-width, initial-scale=1.0">
      <meta http-equiv="X-UA-Compatible" content="ie=edge">
      <title>Portfolio Demo</title>
      <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/5.11.2/css/all.min.css">
      <link href="https://fonts.googleapis.com/css?family=Public+Sans:300i,300,500&display=swap" rel="stylesheet">
      <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-1BmE4kWBq78iYhFldvKuhfTAU6auU8tT94WrHftjDbrCEXSU1oBoqyl2QvZ6jIW3" crossorigin="anonymous">
      <link rel="stylesheet" href="style.css">
    </head>

    <body>
    <header>
        <div class="p-3 mb-2 bg-danger text-white">
            <h1> My Team </h1>
        </div>
    <header> 
    <main>
        <div class="container" id="card-container">
          ${cards.map(card => card).join("")}        
        </div>
    </main>

    </body>
    </html>
    `;
}

module.exports = generatePage;