module.exports = class Users {

    constructor() {
        this._listCollection = [];
        this._mapCollection = {};
    }

    add(item) {
        //check if already added  to keep user unique
        if (this.keys.indexOf(item.macAddress) > -1) {
            throw new Error(`User with mac address ${item.macAddress} already exists`);
        } else {
            this._listCollection.push(item);
            this._mapCollection[item.macAddress] = item;
        }

    }
    asList() {
        return this._listCollection;
    }
    asMap() {
        return this._mapCollection;
    }
    get keys() {
        return Object.keys(this._mapCollection);;
    }

    getUserByMacAddress(macAddress){
        return this._mapCollection[macAddress];
    }
}

