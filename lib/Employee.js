class Employee {
  constructor(name, id, email) {
    this.name = name;
    this.id = id;
    this.email = email;
  }

  getName() {
    return this.name;
  }
  getId() {
    return this.id;
  }

  getEmail() {
    return this.email;
  }

  getRole() {
    return "role";
  }
  getSchool() {
    return "School";
  }
  getGIthub() {
    return "Github";
  }
}

module.exports = Employee;
