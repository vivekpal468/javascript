const UserEmail = "vivekpal547meerut@gmail.com"
if (UserEmail) {
    console.log("loggedIn")
}
else console.log("invalid log in");


// falsy values:

// false, 0, -0, BigInt, "", null, undefined, NaN

//truthy value
// "0", 'false', " ", [], {}, function(){}
const arr = [];
// if(arr.length === 0)
// {
//     console.log("array is empty");
// }

 const emptyObj = {}
 if(Object.keys(emptyObj).length === 0)
 {
    console.log("this is a empty object");
 }


 // nullish collicing operator(??) : null undefined
//    let val1 = 10 ?? 15;
// let val1 = null ?? 15;
//let val1 = undefined ?? 15;
//   console.log(val1);


// ternary operator

const IcePrice = 100;

IcePrice >= 80 ? console.log("more than 80") :  console.log("less than 80");
