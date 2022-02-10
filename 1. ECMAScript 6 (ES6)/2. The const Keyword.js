Constant keyword
var x = 10; 
{
  const x = 5; 
}
console.log(x); //10

Variables defined with const cannot be Redeclared.
Variables defined with const cannot be Reassigned.
Variables defined with const have Block Scope.
const PI = 3.141592653589793;
PI = 3.14;      // This will give an error
PI = PI + 10;   // This will also give an error

You can change the elements of a constant array:
// You can create a constant array:
const cars = ["Saab", "Volvo", "BMW"];
// You can change an element:
cars[0] = "Toyota";
// You can add an element:
cars.push("Audi");
console.log(cars); //t v b a

const cars = ["Saab", "Volvo", "BMW"];
cars = ["Toyota", "Volvo", "Audi"];    // ERROR



Constant Objects
// You can create a const object:
const car = {
  type:"Fiat", 
  model:"500", 
  color:"white"
};
// You can change a property:
car.color = "red";
// You can add a property:
car.owner = "Johnson";
console.log(car); //f 500 r j

const car = {type:"Fiat", model:"500", color:"white"};
car = {type:"Volvo", model:"EX60", color:"red"};    // ERROR

