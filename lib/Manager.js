const Employee = require('./Employee');
const inquirer = require('inquirer');


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber
    };

    getOfficeNumber() {
       return this.officeNumber;
    }
}

module.exports = Manager;