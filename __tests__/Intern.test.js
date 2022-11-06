const Intern = require("../lib/Intern");

it("retrieves school name", () => {
  const intern = new Intern("Yuki");

  expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school));
});

it("retrieves employee role", () => {
  const employee = new Intern("Yuki");

  expect(employee.getRole()).toBe("Intern");
});
