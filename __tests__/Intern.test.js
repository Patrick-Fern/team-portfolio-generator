const Intern = require('../lib/Intern');

test('creates a new intern object', () => {
    const intern = new Intern('dave', 6, 'dave@gmail.com', 'some uni');

    expect(intern.name).toBe('dave');
    expect(intern.id).toBe(6);
    expect(intern.email).toBe('dave@gmail.com');
    expect(intern.school).toBe('some uni');
});