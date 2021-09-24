// menu with options = add engineer, add intern, add manager and generate html
// function that calls inquirer to build the menu
const inquirer = require("inquirer");
const fs = require("fs");
const util = require("util");
const Manager = require("./lib/Manager");
const Engineer = require("./lib/Engineer");
const Intern = require("./lib/Intern");
const template = require("./src/template");

const writeFileSync = util.promisify(fs.writeFile);
const mkdirAsync = util.promisify(fs.mkdir);
var employeeObjects = [];
var employeeData = [];
var employeeCards = [];

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

const init = async () => {
  const employee = [];
  let addMore = true;

  while (addMore) {
    const { name, id, email, role } = await inquirer.prompt(questions);
    if (role === "Manager") {
      const { officeNumber } = await inquirer.prompt(questionsManager);
      employee.push(new Manager(name, id, email, officeNumber));
    } else if (role === "Engineer") {
      const { github } = await inquirer.prompt(questionsEngineer);
      employee.push(new Engineer(name, id, email, github));
    } else {
      const { school } = await inquirer.prompt(questionsIntern);
      employee.push(new Intern(name, id, email, school));
    }
    const { adding } = await inquirer.prompt(confirm);

    addMore = adding;
  }
};

for (const employee of employeeData) {
  const newProfile = createProfile(
    employee.employee_role,
    employee.employee_name,
    employee.employee_id,
    employee.employee_email
  );
  employeeObjects.push(newProfile);
}

for (const employee of employeeObjects) {
  switch (employee.role) {
    case "Manager":
      employeeCards.push(
        template.employeeCard(
          employee.name,
          employee.role,
          `ID: ${employee.id}`,
          `${employee.email}`,
          `Office: ${employee.officeNumber}`
        )
      );
      break;
    case "Engineer":
      employeeCards.push(
        template.employeeCard(
          employee.name,
          employee.role,
          `ID: ${employee.id}`,
          `${employee.email}`,
          `GitHub: <a href="https://github.com/${employee.github}" target="_blank">${employee.github}</a>`
        )
      );
      break;
    case "Intern":
      employeeCards.push(
        template.employeeCard(
          employee.name,
          employee.role,
          `ID: ${employee.id}`,
          `${employee.email}`,
          `School: ${employee.school}`
        )
      );
      break;
  }
}
console.log("The HTML document is being rendered...");

const employeeCardsHTML = employeeCards.join("");
const HTMLData = template.createHTML(employeeCardsHTML);
fs.writeFileSync("./dist/index.html", HTMLData);
console.log("File was written to your 'dist' folder and named 'index.html'!");

init();
