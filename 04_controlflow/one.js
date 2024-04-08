
// const userLoggedIn = true;
const temp = 49;
// if(temp < 50)
// {
//     console.log("temprature is less than 50");
// }
// else
// console.log("temprature is less than 50");

// const score = 300;
// if(score>100)
// {
//     let power = "fly"; //for var it is a global variable
//     console.log(`the power is ${power}`);
// }
// console.log(`the power is ${power}`);

//const balance = 2000
// if(balance >500) console.log("test1"), console.log("test2");
// if(balance < 500)
// {
//     console.log("less than 500");
// } else if((balance < 750))
// {
//     console.log("less than 750");
// }
// else if(balance < 900)
// {
//     console.log("less than the 900");
// }
// else{
//     console.log("less than the 1200");
// }

const userLoggedIn = true;
const debitcard = true;
const userLoggedInfromgoogle = true;
const userLoggedInfromEmail = true;
if(userLoggedIn && debitcard)
{
    console.log("allow to shopping");
}
if(userLoggedInfromgoogle || userLoggedInfromEmail)
{
    console.log("allow to logIn");
}