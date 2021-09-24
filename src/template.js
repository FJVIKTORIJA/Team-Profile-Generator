// HTML template for team profile
function createHTML(content) {
  const htmlTemplate = `
    <!DOCTYPE html>
    <html lang="en-us">
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-eOJMYsd53ii+scO/bJGFsiCZc+5NDVN2yr8+0RDqr0Ql0h+rP48ckxlpbzKgwra6" crossorigin="anonymous">
        <link href="./style.css" rel="stylesheet" type="text/css">
        <title>Company Team</title>
    </head>
    <body>
        <nav class="navbar navbar-expand-lg navbar-light bg-light">
            <h1>Company Team</h1>
        </nav class="navbar navbar-expand-lg navbar-light bg-light">
        <main>
            <div class="main-container">
              ${content}
            </div>
        </main>
        <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
    </body>
    </html>
    `;
  return htmlTemplate;
}

// Function to generate team member cards
function employeeCard(name, position, id, email, info) {
  const cardTemplate = `
<div class="card" style="width: 18rem;">
  <div class="card-body">
    <h5 class="card-title">${name}</h5>
    <h6 class="card-title">${position}</h6>
  </div>
  <ul class="list-group list-group-flush">
    <li class="list-group-item">${id}</li>
    <li class="list-group-item"> Email: <a href="mailto:${email}">${email}</a></li>
    <li class="list-group-item">${info}</li>
  </ul>
</div>
`;
  return cardTemplate;
}

module.exports = {
  createHTML,
  employeeCard,
};
