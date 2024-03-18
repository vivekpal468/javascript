// arrays part 2

const marvel_heroes = ["Thor", "IronMan", "Hulk", "Dr.Strange"]
const DC_Heroes = ["SuperMan", "BatMan", "Flash", "Black_Adam"]

// marvel_heroes.push(DC_Heroes)
// console.log(marvel_heroes);

// console.log(marvel_heroes.length);

const all_Heroes = marvel_heroes.concat(DC_Heroes)
// console.log(all_Heroes);

const all_new_Heroes = [...marvel_heroes, ...DC_Heroes]
// console.log(all_new_Heroes);

const new_another_array = [0,2,3,4,[2,6,7],1,2,[2,5,[5]]]
console.log(new_another_array.flat(Infinity));

console.log(Array.isArray("VIVEK PAL"))
console.log(Array.from("VIVEKP"))
console.log(Array.from({name: "VIVEK PAL"})) //interesting