 // FOR IN
// We can iterate on the object by using for in loop
const object = {
    js : "javascript",
    cpp : "C++",
    C : "C",
    Py : "python"
}

for (const key in object) {
    //console.log(`${key} is shortcut of ${object[key]}`);
}

const array = ["VIVEK","Viraj", "Piyush", "sharad", "yash"]
for (const key in array) {
    console.log(key);
     console.log(array[key]);
}