//create a construction function
//Note here we don't use 'use strict' mode
//the function may run successfully but the undefined
//value would be returned and then global binding name
//is created.

function Person(name) {
  this.name = name;
}

let person = Person("Brother");
console.log(name); // Brother

// Using 'use strict' mode
("use strict");
function person2(name) {
  this.name = name;
}
let pers = person2("bob");
console.log(pers);
// Uncaught TypeError: Cannot set properties of undefined (setting 'name')
