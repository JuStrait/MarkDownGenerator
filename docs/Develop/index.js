// Packages required

var inquirer = require("inquirer");
const fs = require("fs");
const generateMarkdown = require("docs/Develop/utils/generateMarkdown.js");

// Questions for the User

const questions = [
    "What is the title of your project", //0
    "Insert a brief description of you project",//1
    "How do you install your project",//2
    "What is the usage info?", //3
    "Where there any contributors?",//4
    "Was there any testing?", //5
    "Pick a liscense.", //6
    "Whats your github username?", //7 
    "What is your email?" //8
];

// Function to initialize app

function init() {

    inquirer.prompt([

    { 
        type: "input",
        name: "title",
        message: questions[0]
    },
    { 
        type: "input",
        name: "description",
        message: questions[1]
    },
    { 
        type: "input",
        name: "installation",
        message: questions[2]
    },
    { 
        type: "input",
        name: "usage",
        message: questions[3]
    },
    { 
        type: "input",
        name: "contributors",
        message: questions[4]
    },
    { 
        type: "input",
        name: "testing",
        message: questions[5]
    },
    { 
        type: "checkbox",
        name: "license",
        message: questions[6]
        choices: [,
            "Apache License 2.0",
            "GNU General Public License (GPL)",
            "MIT license",
            "Mozilla Public License 2.0"]
    },
    { 
        type: "input",
        name: "github",
        message: questions[7]
    },
    { 
        type: "input",
        name: "email",
        message: questions[8]
    },
    
    ]).then( (answers) => {
        let markdown = generateMarkdown(answers);
        writeToFile(markdown);
    });
}

//Function to write Readme

function writeToFile(data) {

    fs.writeFile( data, "producedMarkdown.md", () => {
        console.log("Markdown Produced!");
    });

}
