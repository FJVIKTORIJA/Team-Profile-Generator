const Engineer = require("../lib/Engineer");

describe("Engineer", () => {
  const john = new Engineer("john", 1, "john@gmail.com", "Github");

  it('John should be an instance of "Engineer"', () => {
    expect(john).toBeInstanceOf(Engineer);
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
    expect(john.getRole()).toBe("Engineer");
  });
  it("should getGithub from employee", () => {
    expect(john.getGIthub()).toBe("Github");
  });
});
