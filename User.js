module.exports = class User {
    constructor(data) {
        // this._name = data.name;
        this.fullName = data.name;
        this.macAddress = data.macaddress;
    }
    get fullName() {
        return `{this.firstName} {this.lastName}`;
    }

    set fullName(fullName) {
        let name = fullName.split(' ');
        if (name.length !== 2 || name[1].length === 0) {
            throw new Error(`Expect format <firstname> <lastname> not ${fullName}`)
        }
        this.firstName = name[0];
        this.lastName = name[1];
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

    get macAddress() {
        return this._macAddress;
    }

    set macAddress(macaddress) {
        let address = macaddress.split(":");
        if (address.length != 6) {
            throw new Error(`Expect Mac Address format (nn:nn:nn:nn:nn:nn) not ${macaddress}`);

        }
        this._macAddress = macaddress;
    }


    toString() {
        return `${this.firstName} ${this.lastName} ${this.macAddress}`;
        // return this._name;
    }


}


