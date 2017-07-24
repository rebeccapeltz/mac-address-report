const User = require("./User");
const Users = require("./Users");


 let u = new User({"name":"Thomas Jefferson","macaddress":"A1:B2:C3:C4:C5:C6"});
console.log("to string",u.toString())


//can't create if unexpected input
// let unamebad = new User({"name":"Thomas","macaddress":"A1:B2:C3:C4:C5:C6"});
// console.log("to string",unamebad.toString());

// let macAddrssBad = new User({"name":"Thomas Jefferson","macaddress":"A1B2C3C4C5C6"});
// console.log("to string",macAddrssBad.toString())

//hidden properties are not private
 for (let property in u){
     console.log(`not private ${property}`);
 }
    

let users = new Users();
users.add(u);
//error adding again
// users.add(u);

let userData = [{"name":"George Washington","macaddress":"1A:2B:3C:4D:5E:6F"},
    {"name":"Abraham Lincoln","macaddress":"11:22:32:44:55:66"},
    {"name":"Theodore Roosevelt","macaddress":"AA:BB:CC:DD:EE:FF"}
];

userData.forEach(user =>{
    users.add(new User(user));
})
users.asList().forEach(user=>{
    console.log(user.toString());
});

console.log("User by address '1A:2B:3C:4D:5E:6F':",`${users.getUserByMacAddress('1A:2B:3C:4D:5E:6F').toString()}`);

// console.log("keys", JSON.stringify(users.keys));