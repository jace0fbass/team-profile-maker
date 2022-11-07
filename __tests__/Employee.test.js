const Employee = require("../lib/Employee");

it("creates an employee object", () => {
  const employee = new Employee("Jason", "jajones414@gmail.com", "0");

  expect(employee.name).toBe("Jason");
  expect(employee.id).toBe("jajones414@gmail.com");
  expect(employee.email).toBe("0");
});

it("asks for employee's id name", () => {
  const employee = new Employee("Jason");

  expect(employee.getName()).toEqual(expect.stringContaining(employee.name));
});

it("asks for employee's email", () => {
  const employee = new Employee("Jason");

  expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email));
});

it("asks for employee's id number", () => {
  const employee = new Employee("Jason");

  expect(employee.getId()).toEqual(expect.stringContaining(employee.id));
});

it("asks for employee's role", () => {
  const employee = new Employee("Jason");

  expect(employee.getRole()).toBe('employee');
});
