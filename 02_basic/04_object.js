// const appUser = new object()

const appUser ={}
appUser.id = "5321489"
appUser.name = "VIVEK PAL"
//appUser.email = "VIVEKPAL@gmail.com"
appUser.age = 19

// console.log(appUser);

const appUser2 = {
    email : "vivekpalmeeurgh@gmail.com",
    fullname: {
        userFullname : {
            firstName : "VIVEK",
            secondName : "PAL"
        }
    }
}
// console.log(appUser2.fullname.userFullname.firstName);



const obj1 = {1: "a", 2:"b", 3 : "c"}
const obj2 = {4: "d", 5:"e", 6 : "f"}

//const obj3 = {obj 1, obj 2}//wrongmethod
// obj3 = object.assign({},obj1,obj2)

 obj3 = {...obj1, ...obj2}

//console.log(obj3);

const user = [
    {
        id : 1,
        name : "vivek pal"
    },
    {
        id : 1,
        name : "vivek pal"
    },
    {
        id : 1,
        name : "vivek pal"
    }
]

// console.log(appUser);

// console.log(Object.keys(appUser));
// console.log(Object.values(appUser));
console.log(Object.entries(appUser));

console.log(appUser.hasOwnProperty('name9'));