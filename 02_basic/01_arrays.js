// arrays
const myArray=[0, 1, 2, 3, 4, 5]
// console.log(myArray[0]);
//different type of array declaration
const myHeroes=["shaktiman", "Ironman"]

const arr2 = new Array(0,1,2,3,4,5)

//array method
// myArray.push(6)
// myArray.push(6)
// myArray.pop()

// myArray.unshift(6)
// myArray.shift()
// console.log(myArray);

// console.log(myArray.includes(9))
// console.log(myArray.indexOf(9))


// const newar = myArray.join()
// console.log(myArray);
// console.log(newar);
// console.log(typeof(newar));


console.log("A ", myArray);   // slice method only return a subarray with the help of given range 
const new1 = myArray.slice(0, 3)
console.log(new1);

const new2 = myArray.splice(0, 3) // splice manipulate the original array 
console.log("B ", myArray);
console.log(new2);