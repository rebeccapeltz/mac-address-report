module.exports = class Names {

    constructor() {
        this._listCollection = [];
        this._mapCollection = {}; 
    }

    add(item) {
        //check if already added  to keep user unique
        if (this.keys.indexOf(item.lastName) > -1) {
           console.log(`User with name ${item.lastName} already exists`);
        } else {
            this._listCollection.push(item);
            this._mapCollection[item.lastName] = item;
        }

    }
    asList() {
        return this._listCollection;
    }
    asMap() {
        return this._mapCollection;
    }
    get keys() {
        return Object.keys(this._mapCollection);
    }
     getUserByLastName(lastName){  
        return this._mapCollection[lastName]; 
    }

}

