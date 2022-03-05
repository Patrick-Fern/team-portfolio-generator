const Employee = require('./Employee');
const inquirer = require('inquirer');

class Engineer extends Employee {
    constructor(name, id, email, github) {
        super(name, id, email);

        this.github = github;
        this.type = "engineer";
    };

    getGitHub() {
        return this.github
        
    };
}

module.exports = Engineer;