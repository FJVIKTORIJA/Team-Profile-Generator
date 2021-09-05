const Intern = require("../lib/Intern");

describe("Intern", () => {
  const john = new Intern("john", 1, "john@gmail.com", "School");

  it('John should be an instance of "Employee"', () => {
    expect(john).toBeInstanceOf(Intern);
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
    expect(john.getRole()).toBe("Intern");
  });

  it("should getSchool from employee", () => {
    expect(john.getSchool()).toBe("School");
  });
});
