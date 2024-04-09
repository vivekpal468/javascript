// FOR LOOP

// for (let i = 0; i < 10; i++) {
//     const element = i;
//     console.log(element);
// }

// for (let i = 1; i <= 10; i++) {
//    for (let j = 1; j <= 10; j++) {
//     console.log(i + `*` + j + `=` + i*j);
//     }  
// }

// BREAK AND CONTINUE
// for (let i = 1; i <= 20; i++){
//         if(i == 5)
//         {
//             console.log("detected 5");
//             break;
//         }
//         console.log(`the value is ${i}`);
// }

for (let i = 1; i <= 20; i++){
    if(i == 5)
    {
        console.log("detected 5");
        continue;
    }
    console.log(`the value is ${i}`);
}