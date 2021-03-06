const Manager = require("../lib//Manager");

describe("Manager", () => {
  const john = new Manager("john", 1, "john@gmail.com");

  it('John should be an instance of "Employee"', () => {
    expect(john).toBeInstanceOf(Manager);
  });

  it("should getName from employee", () => {
    expect(john.getName()).toBe("john");
  });

  it("should getEmail from employee", () => {
    expect(john.getEmail()).toBe("john@gmail.com");
  });

  it("should getID from employee", () => {
    expect(john.getId()).toBe(1);
  });

  it("should getRole from employee", () => {
    expect(john.getRole()).toBe("Manager");
  });
});
