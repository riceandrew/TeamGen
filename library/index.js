var fs = require('fs');
var inquirer = require('inquirer');

inquirer.prompt([
    {
        type: "input",
        name: "name",
        message: "What is your name?"
    },
    {
        type: "input",
        name: "email",
        message: "What is your employee email?"
    },
    {
        type: "input",
        name: "id",
        message: "What is your employee id?"
    },
    {
        type: "list",
        name: "title",
        message: "What is your title?",
        choices: [
            "Employee",
            "Manager",
            "Engineer",
            "Intern"
        ]
    },
]).then( function(data){

    if(data.title === "Manager"){
        
    }
    else if(data.title === "Engineer"){

    }
    else if(data.title === "Intern"){

    }
    else{}
})