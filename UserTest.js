class User {
     constructor(data) {
        // this._name = data.name;
        this.name = data.name;
        this.macAddress =data.macaddress;
    }
    get name(){
        return this._name;
    }

    get macAddress (){
        return this._macAddress;
    }

    set name(name) {
        this._name = name;
    } 

    get formatted (){
        let formattedString = "";
        let savedAddress = this.macAddress;
        for (let i=0;i<savedAddress.length;i++){
            if ( i> 0 && i % 2 === 0){
                formattedString += ".";
            }
            formattedString += this.macAddress[i];
        }
        return formattedString;
    }

    toString(){
        return `${this._name} ${this.macAddress}`;
        // return this._name;
    }

    set macAddress(macadress){
        let address = macadress.split(":");
        if (address.length != 6) {
            console.log("error");
            return;
        }
        this._macAddress = address.join('');
    }

}

class Users {

    constructor(){
        this._listCollection = [];
        this._mapCollection = {};
    }

    add(item){
        //check if already added  to keep name unique
        this._listCollection.push(item);
        this._mapCollection[item.macAddress] = item;
    }
    list(){
        this._listCollection.forEach(user=>{
            // console.log("list",JSON.stringify(user));
            console.log("list",user.toString());
        })
    }
    get keys(){
        let keys = [];
        for (let k in this._mapCollection){
            keys.push(k);
        }
        return keys;
    }
 }

let u = new User({"name":"Thomas Jefferson","macaddress":"A1:B2:C3:C4:C5:C6"});
console.log("to string",u.toString())
console.log("formatted", u.formatted)
// console.log("name", u.name);
// u.name = "test";
// console.log("name", u.name);
// console.log (u.name === "test");

console.log("macAddress", u.macAddress);

 for (let property in u){
     console.log(property);
 }
    
console.log("hidden properties", u._name);

let users = new Users();
users.add(u);

let userData = [{"name":"George Washington","macaddress":"1A:2B:3C:4D:5E:6F"},
    {"name":"Abraham Lincoln","macaddress":"11:22:32:44:55:66"},
    {"name":"Theodore Roosevelt","macaddress":"AA:BB:CC:DD:EE:FF"},
    {"name":"Thomas Jefferson","macaddress":"A1:B2:C3:C4:C5:C6"}
];



userData.forEach(user =>{
    users.add(new User(user));
})
users.list();

console.log("keys", JSON.stringify(users.keys));