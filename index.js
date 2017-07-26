const Name = require("./Name");
const Names = require("./Names");


let name = new Name({ "name": "Thomas Jefferson" });
console.log("to string", name.toString())



//hidden properties are not private
for (let property in name) {
    console.log(`not private ${property}`);
}


let names = new Names();


let nameData = [{ "name": "George Washington" },
{ "name": "Thomas Jefferson" },
{ "name": "Abraham Lincoln" },
{ "name": "Theodore Roosevelt" }
];

nameData.forEach(name => {
    names.add(new Name(name));
})
names.asList().forEach(name => {
    console.log(name.toString());
});

console.log("User by name 'Washington':", `${names.getUserByLastName('Washington').toString()}`);

