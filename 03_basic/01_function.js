// console.log("v");
// console.log("i");
// console.log("v");
// console.log("e");
// console.log("k");

// function saymyname()
// {
// console.log("v");
// console.log("i");
// console.log("v");
// console.log("e");
// console.log("k");
// }

// saymyname()

// function addtwonumbers(num1, num2)
// {
//     console.log(num1 + num2);
// }

// addtwonumbers(56, 89)

function IsloggedIn(username = "sam")
{
    if(!username)
    console.log("please enter a vlid username");
    else
    return `${username} is logged in`
}

console.log(IsloggedIn("vivek"));