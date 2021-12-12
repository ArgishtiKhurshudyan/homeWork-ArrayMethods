// impliment parseInt();

// function ImplimentParseInt(){

// }

// ImplimentParseInt();

function pars(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 || str[i] <= 0 || str[i] === '-' )result += str[i];
    else break;
  }
  return result.length === 0 ? NaN : +result;
}
console.log(+pars(""));

let x = '54m';
let y = pars(x);

console.log(y);

//impiment float

function float(str) {
  let result = "";
  for (let i = 0; i < str.length; i++) {
    if (str[i] >= 0 || str[i] <= 0 || str[i] === '-' || str[i] === '.' )result += str[i];
    else break;
  }
  return result.length === 0 ? NaN : +result;
}
console.log(+float(""));
