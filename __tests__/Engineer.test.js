const Engineer = require("../lib/Engineer");

it("creates an engineer object and retrieves Github", () => {
  const engineer = new Engineer("Lauren");

  expect(engineer.getGithub()).toEqual(
    expect.stringContaining(engineer.github)
  );
});

it("retrieves employee role", () => {
  const employee = new Engineer("Lauren");

  expect(employee.getRole()).toBe("Engineer");
});
