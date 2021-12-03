const Employee = require('./Employee');

class Engineer extends Employee {
    constructor(name, id, email, GitHub) {
        super(name, id, email);
        this.GitHub = GitHub;
        this.title = 'Engineer';
    }
    getRole() {
        return this.title;
    }
    getGitHub() {
        return this.GitHub;
    }
}

module.exports = Engineer