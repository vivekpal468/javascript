// const user = {
//     // username : "VIVEK PAL",
//     price : 999,

//     welcomeMessage: function(){
//         console.log(`${this.username}, welcome to website`);
//         console.log(this);
//     }
// }
// user.welcomeMessage()
// console.log(this);

// function href()
// {
//     console.log(this);
// }

// href()

// const href = function()
// {
//     let username = "vivek"
//     console.log(this.username);
// }
// href()

const href = () =>
{
    let username = "vivek"
    console.log(this.username);
}
// href()

// const addTwo = (num1, num2) =>{
//     return num1 + num2;
// }
// console.log(addTwo(69,87));

const addTwo = (num1, num2) =>   num1 + num2;  //implicit function
    

console.log(addTwo(69,87));