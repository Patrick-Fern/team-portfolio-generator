const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');


const nextEmployee = function() {
    inquirer.prompt({
        type: 'list',
        name: 'next employee',
        message: "Would you like to add another employee, and which type?",
        choices: ['No', 'Engineer', 'Intern']
    });
}

function buildTeam() {
    Manager.getName()
    .then(Manager.getId())
    .then(Manager.getEmail())
    .then(Manager.getOfficeNumber())
    .then(({ name, ID, Email, officeNumber}) => {
        this.manager = new Manager(name, ID, Email, officeNumber);
        console.log(this.manager);
                
    });
    
};

buildTeam();


