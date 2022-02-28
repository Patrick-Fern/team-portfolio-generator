const Employee = require('./Employee');
const inquirer = require('inquirer');

class Intern extends Employee {
    constructor(name = '', id, email = '', school) {
        super(name, id, email);

        this.school = school;
    };
    
    getSchool() {
        
    }
}

module.exports = Intern;