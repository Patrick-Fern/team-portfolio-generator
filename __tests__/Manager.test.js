const Manager = require('../lib/Manager');

test('creates a new manager object', () => {
    const manager = new Manager('dave', 6, 'dave@gmail.com', 7);

    expect(manager.name).toBe('dave');
    expect(manager.id).toBe(6);
    expect(manager.email).toBe('dave@gmail.com');
    expect(manager.officeNumber).toBe(7);
})