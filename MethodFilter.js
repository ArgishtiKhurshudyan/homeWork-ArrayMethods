// Given an array, return a new array that only includes the numbers

function filterNumber(arr) {
  return arr.filter(function(item) {
    if (typeof item === 'number') {
      return item;
    }
  });
}
console.log(
  filterNumber([
    1,
    2,
    "a",
    true,
    {},
    undefined,
    55,
    false,
    "hi",
    null,
    166,
    NaN
  ])
);
//Write a function which remove users with language equals to 'ru'.

const users = [
    {
    username: "Yuri Gagarin",
    lang: "ru",
    },
    {
    username: "Nil Armstrong",
    lang: "ENG",
    },
    ];
function FilterRemovRu(){

  return users.filter(ru => ru.lang != "ru")


} console.log(FilterRemovRu())