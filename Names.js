module.exports = class Names {

    constructor() {
        this._listCollection = [];
        this._mapCollection = {}; //extra credit
    }

    add(item) {
        //check if already added  to keep user unique
        if (this.keys.indexOf(item.lastName) > -1) {
           console.log(`User with name ${item.lastName} already exists`);
        } else {
            this._listCollection.push(item);
            this._mapCollection[item.lastName] = item;//extra credit
        }

    }
    asList() {
        return this._listCollection;
    }
    asMap() {
        return this._mapCollection;//extra credit
    }
    get keys() {
        return Object.keys(this._mapCollection);;//extra credit
    }
     getUserByLastName(lastName){  //extra credit
        return this._mapCollection[lastName]; 
    }

}

