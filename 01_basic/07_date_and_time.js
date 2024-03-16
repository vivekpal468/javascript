// dates


let myDate = new Date();
console.log(myDate.toString());
console.log(myDate.toDateString());
console.log(myDate.toISOString());
console.log(myDate.toJSON().toString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toLocaleString());
console.log(myDate.toTimeString());

console.log(typeof myDate);

let mycreatedDate = new Date(2024, 6, 5)
// let mycreatedDate = new Date("01-01-2024")
console.log(mycreatedDate.toLocaleDateString());

let timestamp = Date.now();
// console.log(Math.floor(timestamp/1000))