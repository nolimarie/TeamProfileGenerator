const inquirer = require("inquirer");
const jest = require("jest");
const path = require("path");

class Manager {
    constructor(name, id, email, officeNumber) {
        this.name = name;
        this.id = id;
        this.email = email;
        this.officeNumber = officeNumber;
    }
}