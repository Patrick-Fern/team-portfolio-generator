const Employee = require('../lib/Employee');

test('creates a new employee object', () => {
    const employee = new Employee('dave', 6, 'dave@gmail.com')
    
    expect(employee.name).toBe('dave');
    expect(employee.id).toBe(6);
    expect(employee.email).toBe('dave@gmail.com');
});