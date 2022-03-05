const inquirer = require('inquirer');
const Intern = require('./lib/Intern');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const generatePage = require('./src/page-template');
const fs = require('fs');
let team = [];


const enginnerEmployee = function(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is their name?',
            
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is their employee ID?'
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is their email address?'
        },
        {
            type: "input",
            name: "github",
            message: "What is their GitHub username?",
        }]).then(function(answers){
            const newEngineer = new Engineer(answers.name, answers.ID, answers.Email, answers.github);
            team.push(newEngineer);   
        }).then(function(){
            nextEmployee();
        });
};

const internEmployee = function(){
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: 'what is their name?',
            
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is their employee ID?'
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is their email address?'
        },
        {
            type: "input",
            name: "school",
            message: "What school do they attend?",
        }]).then(function(answers){
            const newIntern = new Intern(answers.name, answers.ID, answers.Email, answers.school);
            team.push(newIntern);   
        }).then(function(){
            nextEmployee();
        });
};
const nextEmployee = function() {
    inquirer.prompt({
        type: 'list',
        name: 'nextEmployee',
        message: "Would you like to add another employee, and which type?",
        choices: ['No', 'Engineer', 'Intern']
    }).then(function(answer){
        switch(answer.nextEmployee){
            case "No":
                generatePage(team)
                .then(pageHtml => {writeFile(pageHtml);
                }).then(writeFileResponse =>{
                    console.log(writeFileResponse);
                }).catch(err => {
                    console.log(err);
                });  
                break;
            case "Engineer":
                enginnerEmployee();
                break;
            case "Intern":
                internEmployee();
                break;

        }
    });
}

function buildManager() {
    inquirer.prompt([
        {
            type: 'input',
            name: 'name',
            message: "what is the manager's name?",
            
        },
        {
            type: 'input',
            name: 'ID',
            message: 'What is their employee ID?'
        },
        {
            type: 'input',
            name: 'Email',
            message: 'What is their email address?'
        },
        {
            type: 'input',
            name: 'OfficeNumber',
            message: 'What is their office number?'
        }
    
    
    ]).then(function(answers){
            const newManager = new Manager(answers.name, answers.ID, answers.Email, answers.OfficeNumber);
            team.push(newManager);   
        }).then(function(){
            nextEmployee();
        });
    
};

function writeFile(fileContent) {
    return new Promise((resolve, reject) => {
        fs.writeFile('./dist/index.html', fileContent, err => {
            if (err) {
                reject(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};



// function teamTemplate(data){

//     generatePage(data)
//     .then(pageHtml => {writeFile(pageHtml);
//     }).then(writeFileResponse =>{
//         console.log(writeFileResponse);
//     }).catch(err => {
//         console.log(err);
//     });  
// };

buildManager();

