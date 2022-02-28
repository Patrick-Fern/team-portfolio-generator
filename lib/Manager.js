const Employee = require('./Employee');
const inquirer = require('inquirer');


class Manager extends Employee {
    constructor(name = '', id, email = '', officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber
    };

    getOfficeNumber() {
        inquirer.prompt({
            type: 'number',
            name: 'officeNumber',
            message: 'What is their office number?'
        })
        return officeNumber
    }
}

module.exports = Manager;