const Engineer = require('../lib/Engineer');

test('creates a new engineer object', () => {
    const engineer = new Engineer('dave', 6, 'dave@gmail.com', 'dave-programs');

    expect(engineer.name).toBe('dave');
    expect(engineer.id).toBe(6);
    expect(engineer.email).toBe('dave@gmail.com');
    expect(engineer.github).toBe('dave-programs');
});