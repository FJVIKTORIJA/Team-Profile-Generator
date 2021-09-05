const Employee = require("../lib/Employee.js");

class Engineer extends Employee {
  constructor(name, id, email, github) {
    super(name, id, email);
    this.github = github;
  }
  getRole() {
    return "Engineer";
  }
  getGIthub() {
    return this.github;
  }
}
module.exports = Engineer;
