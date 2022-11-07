const Manager = require("../lib/Manager");

it("creates a manager object and retrieves office number", () => {
  const manager = new Manager("Lauren");

  expect(manager.getOffice()).toEqual(expect.stringContaining(manager.office));
});

it("gets employee role", () => {
  const employee = new Manager("Lauren");

  expect(employee.getRole()).toBe('Manager');
});
