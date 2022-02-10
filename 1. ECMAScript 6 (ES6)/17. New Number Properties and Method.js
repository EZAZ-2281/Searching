New Number Properties
console.log(Number.EPSILON);
console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MIN_SAFE_INTEGER);

Safe integers are all integers from -(2^53 - 1) to +(2^53 - 1).
This is safe: 9007199254740991. This is not safe: 9007199254740992.


New Number Methods
console.log(Number.isInteger(10)); //true
console.log(Number.isInteger(10.5)); //flase
console.log(Number.isSafeInteger(11)); //true
console.log(Number.isSafeInteger(12345678901234567890)); //false

