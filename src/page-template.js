function generateManager(data) {
    data.filter(({ officeNumber}) => )
    return `
    <div class="card  mb-3" style="max-width: 18rem;">
        <div class="card-header text-white bg-primary">Header</div>
        <div class="card-body text-dark bg-light">
            <h5 class="card-title">Primary card title</h5>
            <p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
  </div>
</div>
    `
}




function generatePage(data) {
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
        ${generateManager(data)}
        ${generateEngineer(data)}
        ${generateIntern(data)}

    </main>

    </body>
    </html>
    `;
}