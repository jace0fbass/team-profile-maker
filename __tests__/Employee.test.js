const Employee = require('../lib/Employee')

test('creates an employee object', () => {
    const employee = new Employee('Jason', 'jajones414@gmail.com', '0')

    expect(employee.name).toBe('Jason')
    expect(employee.name).toBe('jajones414@gmail.com')
    expect(employee.id).toBe('0')
})

test("asks for employee's id name", () => {
    const employee = new Employee('Jason')

    expect(employee.getName()).toEqual(expect.stringContaining(employee.name))
})

test("asks for employee's email", () => {
    const employee = new Employee('Jason')

    expect(employee.getEmail()).toEqual(expect.stringContaining(employee.email))
})

test("asks for employee's id number", () => {
    const employee = new Employee('Jason')

    expect(employee.getId()).toEqual(expect.stringContaining(employee.id))
})

test("asks for employee's role", () => {
    const employee = new Employee('Jason')

    expect(employee.getRole()).toBe('employee')
})