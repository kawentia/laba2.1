function isEmpty(obj) {
  for (let key in obj) {
    if (obj.hasOwnProperty(key))
      return false;
  }
  return true;
}

let user = {};
alert(isEmpty(user));
user.name = "Mark";
alert(isEmpty(user));
user.surname = "Smit";
user.name = "Taras";
delete user.name

let emptyObject = {};
let nonEmptyObject = { name: 'Taras' };

console.log(isEmpty(emptyObject));
console.log(isEmpty(nonEmptyObject));

