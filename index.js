// menu with options = add engineer, add intern, add manager and generate html
// function that calls inquirer to build the menu
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");

const questions = [
  { name: "name", message: "Name of the employee?" },
  { name: "id", message: "ID of the employee ?" },
  { name: "email", message: "Email of the employee?" },
  {
    type: "list",
    name: "role",
    message: "Role?",
    choices: ["Manager", "Engineer", "Intern"],
  },
];

const questionsManager = [
  { name: "officeNumber", message: "What is the office number?" },
];

const questionsEngineer = [
  { name: "github", message: "What is the Engineer gihub?" },
];
const questionsIntern = [
  { name: "school", message: "What is the name of the School?" },
];

const confirm = [
  {
    type: "confirm",
    name: "adding",
    message: "Would you like to add employee ?",
  },
];

const generateEmployees = (employees) => {
  const employeesArrHtml = employees.map((employee) => {
    return `
    <div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">Name: ${employee.getName()}</h5>
      <h6 class="card-title">Role: ${employee.getRole()}</h6>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${employee.getId()}</li>
      <li class="list-group-item"> Email: <a href="mailto:">${employee.getEmail()}</a></li>
      <li class="list-group-item">Github: <a href="mailto:">${employee.getGIthub()}</li>
      <li class="list-group-item">School: ${employee.getSchool()}</li>
    </ul>
  </div>
    `;
  });
  const employeesHtml = employeesArrHtml.join("");
  const html = `
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
            ${employeesHtml}
          </div>
      </main>
      <script src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.0-beta3/dist/js/bootstrap.bundle.min.js" integrity="sha384-JEW9xMcG8R+pH31jmWH6WWP0WintQrMb4s7ZOdauHnUtxwoG2vI5DkLtS3qm9Ekf" crossorigin="anonymous"></script>
  </body>
  </html>
  `;

  fs.writeFileSync("./dist/index.html", html);
};

const init = async () => {
  const employees = [];
  let addMore = true;

  while (addMore) {
    const { name, id, email, role } = await inquirer.prompt(questions);
    if (role === "Manager") {
      const { officeNumber } = await inquirer.prompt(questionsManager);
      employees.push(new Manager(name, id, email, officeNumber));
    } else if (role === "Engineer") {
      const { github } = await inquirer.prompt(questionsEngineer);
      employees.push(new Engineer(name, id, email, github));
    } else {
      const { school } = await inquirer.prompt(questionsIntern);
      employees.push(new Intern(name, id, email, school));
    }
    const { adding } = await inquirer.prompt(confirm);

    addMore = adding;
    if (!adding) {
      generateEmployees(employees);
    }
  }
};

init();
