//Given an array, return the sum of numbers that are 18 or over.;


// let arr = [1, 22, 55, 166, 5, 36, 11, 205, 333, 95, 62, 10, 43];// 22 + 55 + 166 + 366 + 205 + 333 + 95 + 62 + 43 = 1347

// let arr1 = arr.reduce((acc,curr) => {
//     if(curr > 18) acc += curr

//     return acc
// },0)
// console.log(arr1)


// Write a function which calculates average age of users.
const users = [
{
username: "Yuri Gagarin",
lang: "ru",
age: 56,
},
{
username: "Nil Armstrong",
lang: "ENG",
age: 54,
},
];

let arr2 = users.reduce(function(acc,cur){

return (acc.age + cur.age) / 2;

}); 
console.log(arr2);
 