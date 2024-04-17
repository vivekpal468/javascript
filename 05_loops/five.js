const coding = ["Javascript", "Python", "C++", "C", "Java"]

coding.forEach(function (value) {
    //console.log(value);          using normal function
})

coding.forEach( (item) => {
    //console.log(item);          //using arrow function
})

function printMe(item)
{
    // console.log(item);
}

//coding.forEach(printMe);

const myCoding = [
    {
        languagename : "javascript",
        languagetype : "js"
    },
    {
        languagename : "python",
        languagetype : "py"
    },
    {
        languagename : "java",
        languagetype : "java"
    }
]

myCoding.forEach((item) =>
{
    console.log(item.languagename);
    console.log(item.languagetype);
}
)