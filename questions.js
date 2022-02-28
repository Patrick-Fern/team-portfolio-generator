inquirer.prompt([
    {
        type: 'input',
        name: 'name',
        message: 'what is their name?',
        validate: nameInput => {
            if (nameInput) {
                return true;
            } else {
                console.log('Please enter their name!');
                return false;
            }
        }
    },
    {
        type: 'number',
        name: 'ID',
        message: 'What is their employee ID?'
    },
    {
        type: 'input',
        name: 'Email',
        message: 'What is their email address?'
    }])

    // inbetween employee question
    inquirer.prompt({
        type: 'list',
        name: 'next employee',
        message: "Would you like to add another employee, and which type?",
        choices: ['No', 'Engineer', 'Intern']
    });
    
    //engineer question
    inquirer.prompt({
        type: "input",
        name: "github",
        message: "What is their GitHub username?",
    })

    // 
