const Employee = require('./Employee');
const inquirer = require('inquirer');


class Manager extends Employee {
    constructor(name, id, email, officeNumber) {
        super(name, id, email);

        this.officeNumber = officeNumber
        this.type = "manager";
    };

    getOfficeNumber() {
       return this.officeNumber;
    }
}

module.exports = Manager;