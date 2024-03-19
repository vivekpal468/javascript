// singleton
// object.creater (by constructor)

// object literals (declaration of object)

// const mySym = symbol ("newOne");
const jsUser = {
    name : "VIVEK PAL",
    age : 18,
    location : "MEERUT",
    isLoggedIn : false,
    lastLoggedDays : ["MONDAY", "WEDNESDAY", "SATURDAY"]
}
// console.log(jsUser.name);
// console.log(jsUser["name"]);
// console.log(jsUser.mySym);

// jsUser.name = "stiphen";

// Object.freeze(jsUser)
// jsUser.name = "VIVEK PAL";

// console.log(jsUser);

jsUser.greeting = function()
{
    console.log("Hello! js user");
}

// console.log(jsUser.greeting());
// console.log(jsUser.greeting);

jsUser.greetingtwo = function()
{
    console.log(`Hello! js user ${this.name}`);
}

console.log(jsUser.greetingtwo());