const Employee = require('./lib/Employee');
const Manager = require('./lib/Manager');
const Engineer = require('./lib/Engineer');
const Intern = require('./lib/Intern');
const inquirer = require('inquirer');
const employees = [];
const path = require('path');
const fs = require('fs');
const render = require('./lib/htmlrender');

const OUTPUT_DIR = path.resolve(__dirname, "dist");
const outputPath = path.join(OUTPUT_DIR, "index.html");

const questions = [
    {
        type: "input",
        name: "name",
        message: "Please enter employee name:"
    },
    {
        type: "input",
        name: "id",
        message: "Please enter employee ID number:"
    },
    {
        type: "input",
        name: "email",
        message: "Please enter employee e-mail address:"
    },
    {
        type: "list",
        name: "role",
        message: "What is the employee's role in the team?",
        choices: ["Manager", "Engineer", "Intern"]
    },
    {
        type: "input",
        name: "officeNumber",
        message: "Please enter manager's office number:",
        when: function (answers) {
            return answers.role === "Manager";
        }
    },
    {
        type: "input",
        name: "GitHub",
        message: "Please enter engineer's github username:",
        when: function (answers) {
            return answers.role === "Engineer";
        }
    },
    {
        type: "input",
        name: "school",
        message: "What is the name of the school they are attending?",
        when: function (answers) {
            return answers.role === "Intern";
        }
    }
];

function promptUser() {

    inquirer.prompt(questions).then(function (response) {
        if (response.role === "Manager") {
            const currentManager = new Manager(response.name, response.id, response.email, response.officeNumber);
            employees.push(currentManager);
        }
        else if (response.role === "Engineer") {
            const currentEngineer = new Engineer(response.name, response.id, response.email, response.github);
            employees.push(currentEngineer);
        }
        else if (response.role === "Intern") {
            const currentIntern = new Intern(response.name, response.id, response.email, response.school);
            employees.push(currentIntern);
        }
        currentEmployee();
    });
};

function currentEmployee() {
    inquirer.prompt([
        {
            type: "confirm",
            name: "currentEmployee",
            message: "Would you like to enter another employee?",
            default: true
        }
    ]).then(function (answers) {
        if (answers.currentEmployee) {
            promptUser();
        }
        else {
            const data = render(employees);
            fs.writeFile(outputPath, data, function (err) {
                if (err) throw err;
            })
        }
    })
}

function init() {

    promptUser();

}

init();

