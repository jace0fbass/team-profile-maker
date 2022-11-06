const manager = require("../lib/Manager");

it("creates a manager object and retrieves office number", () => {
  const manager = new Manager("Jason");

  expect(manager.getOffice()).toEqual(expect.stringContaining(manager.office));
});

it("gets employee role", () => {
  const employee = new Manager("Jason");

  expect(employee.getRole).toBe("Manager");
});
