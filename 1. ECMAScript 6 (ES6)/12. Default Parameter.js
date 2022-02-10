Default Parameter Values

function myFunction(x, y = 10){
    // y is 10 if not passed or undefined
    return x + y; 
}
let a = myFunction(5);
console.log(a); //15
