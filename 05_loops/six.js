// const coding = ["Javascript", "Python", "C++", "C", "Java"]
// const items = coding.forEach((item) => {
//     console.log(item);
// });
// console.log(items);

// const nums = [1,2,3,4,5,6,7,8,9]

// const newnums = nums.filter((nums)=>nums>4)

// console.log(newnums);

// const nums = [1,2,3,4,5,6,7,8,9]

// const newnums = nums.filter((nums)=>
// {
//     return nums>4
// })

// console.log(newnums);
const books = [
    { title: 'Book One', genre: 'Fiction', publish: 1981, edition: 2004 },
    { title: 'Book Two', genre: 'Non-Fiction', publish: 1992, edition: 2008 },
    { title: 'Book Three', genre: 'History', publish: 1999, edition: 2007 },
    { title: 'Book Four', genre: 'Non-Fiction', publish: 1989, edition: 2010 },
    { title: 'Book Five', genre: 'Science', publish: 2009, edition: 2014 },
    { title: 'Book Six', genre: 'Fiction', publish: 1987, edition: 2010 },
    { title: 'Book Seven', genre: 'History', publish: 1986, edition: 1996 },
    { title: 'Book Eight', genre: 'Science', publish: 2011, edition: 2016 },
    { title: 'Book Nine', genre: 'Non-Fiction', publish: 1981, edition: 1989 },
  ];

  let newbooks = books.filter((bk) => bk.genre === 'History');
   newbooks = books.filter((bk) => bk.publish >= 2000 && bk.genre === 'History');
  console.log(newbooks);