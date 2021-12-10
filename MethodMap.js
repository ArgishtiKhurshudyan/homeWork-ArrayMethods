// Write a function which returns array of usernames.

const users = [
  {
    username: "Yuri Gagarin",
    lang: "ru"
  },
  {
    username: "Nil Armstrong",
    lang: "ENG"
  }
];

// getUserNames(users); // ['Yuri Gagarin', 'Nil Armstrong']
function getUserNames() {
  return users.map(function(name) {
    // Or one line  return users.map(name => name.username):D
    return name.username;
  });
}

console.log(getUserNames());

// Write a function which returns array of lengths of user names

function getUserLengths() {
  return users.map(function(name) {
    // Or one line  return users.map(name => name.username.length):D
    return name.username.length;
  });
}
console.log(getUserLengths());

// Write a function which parses string integers. If it's not possible to
// parse, then add null
const parseInteger = ["1", "px", "34"];
function StringInteger() {
  return parseInteger.map(function(item) {
    if (typeof item === "string") {
      return +item;
    }
  });
}
console.log(StringInteger());
