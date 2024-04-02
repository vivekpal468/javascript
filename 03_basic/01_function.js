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

// function IsloggedIn(username = "sam")
// {
//     if(!username)
//     console.log("please enter a vlid username");
//     else
//     return `${username} is logged in`
// }

// console.log(IsloggedIn("vivek"));

// function calculateCartprice(...num1)
// {
//     return num1;
// }
// console.log(calculateCartprice(100,200,500,2000));

const user = {
    username: "vivek pal",
    price: "399"
}
function handleObject(anyObject)
{
    console.log(`username is ${anyObject.username} and the price of the product is ${anyObject.price}`);
}
handleObject ({
    username: "sam",
    price: "999"
})