New Global Methods
console.log(isFinite(10/0)); //false
console.log(isFinite(10/1)); //true
console.log(isNaN("Kibria")); //true
console.log(isNaN(10)); //false
console.log(Number.isNaN(0/0)); //true
console.log(Number.isNaN("Kibria")); //false


In JavaScript, NaN is short for "Not-a-Number".
In JavaScript, NaN is a number that is not a legal number.
The Number.isNaN() method returns true if the value is NaN, and the type is a Number.
