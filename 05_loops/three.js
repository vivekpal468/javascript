// for of 
// ["","",""];
// [{},{},{}];

const array = [1,2,3,4,6,5]

for (const num of array) {
    // console.log(num);
}

const str = "VIVEK PAL"

for (const string  of str) {
    // console.log(string  );
}

 // MAP 
 const map = new Map();
 map.set('IN', "INDIA");
 map.set('FR', "FRANCE");
 map.set('USA', "Unites States of America");
 map.set('FR', "FRANCE");// it does not contain the duplicate values and automatically remove the duplicate values

 //console.log(map);

 // For of loop on map data set

 for (const [key, value] of map) {
    console.log(`key is : ${key}`);
    console.log(`value is : ${value}`);
 }
