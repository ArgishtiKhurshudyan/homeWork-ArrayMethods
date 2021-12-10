// Your function must use sort method;

function asc(a, b) {
  if (a > b) return 1;
  if (a == b) return 0;
  if (a < b) return -1;
}

function desc(x, y) {
  if (x < y) return 1;
  if (x == y) return 0;
  if (x > y) return -1;
}

let arr = [4, 3, 2, 1]; //asc
let arr1 = [7, 8, 11, 66]; //asc
let arr2 = [7, 8, 11, 66]; //desk

arr.sort(asc); //asc
arr1.sort(asc); //asc
arr2.sort(desc); //desc
console.log(arr); //1,2,3,4
console.log(arr1); //7,8,11,66
console.log(arr2); // 66,11,8,7
