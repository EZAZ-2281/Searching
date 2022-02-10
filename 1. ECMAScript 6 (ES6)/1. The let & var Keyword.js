var x = 10; 
{
  let x = 5; 
}
console.log(x); //10

let x = "John Doe";
let x = 0;
// SyntaxError: 'x' has already been declared

var x = "John Doe";
var x = 0; //correct

Variables declared inside a { } block cannot be accessed from outside the block:
{
  let x = 2;
}
// x can NOT be used here


{
  var x = 2;
}
// x CAN be used here


var x = 10; // Here x is 10
{
var x = 2; // Here x is 2
}
// Here x is 2


let x = 10; // Here x is 10
{
let x = 2; // Here x is 2
}
// Here x is 10


var x = 2; // Now x is 2
var x = 3; // Now x is 3

var x = 2;    // Allowed
let x = 3;    // Not allowed

{
let x = 2;    // Allowed
let x = 3     // Not allowed
}

{
let x = 2;    // Allowed
var x = 3     // Not allowed
}


let x = 2;    // Allowed
{
let x = 3;    // Allowed
}

{
let x = 4;    // Allowed
}


This is OK:
carName = "Volvo";
var carName;

but, 
carName = "Saab";
let carName = "Volvo";
ReferenceError: Cannot access 'carName' before initialization
