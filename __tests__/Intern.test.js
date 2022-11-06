const Intern = require('../lib/Intern')

it('retrieves school name', () => {
    const intern = new Intern('Jason')

    expect(intern.getSchool()).toEqual(expect.stringContaining(intern.school))
})

it('retrieves employee role', () => {
    const employee = new Intern('Jason')
    
    expect(employee.getRole()).toBe('Intern')
})