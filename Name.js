module.exports = class Name {
    constructor(data) {
        this.fullName = data.name;
    }
    get fullName() {
        return `{this.firstName} {this.lastName}`;
    }

    set fullName(fullName) {
        let name = fullName.split(' ');
        if (name.length !== 2 || name[1].length === 0) {
            console.log(`Expect format <firstname> <lastname> not ${fullName}`);
        } else {
            this.firstName = name[0];
            this.lastName = name[1];
        }
    }

    set firstName(firstName) {
        this._firstName = firstName;
    }

    set lastName(lastName) {
        this._lastName = lastName;
    }

    get firstName() {
        return this._firstName;
    }

    get lastName() {
        return this._lastName;
    }

    toString() {
        return `${this.firstName} ${this.lastName}`;
    }


}


