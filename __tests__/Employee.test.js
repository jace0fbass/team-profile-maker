const Employee = require("../lib/Employee");

it("creates an employee object", () => {
  const employee = new Employee("Jason", "0", "jajones414@gmail.com");

  expect(employee.name).toBe("Jason");
  expect(employee.id).toBe("0");
  expect(employee.email).toBe("jajones414@gmail.com");
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
// test failing at .toBe 
  expect(employee.getRole()).toBe("Employee");
});
