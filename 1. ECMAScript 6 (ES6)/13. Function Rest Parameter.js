Function Rest Parameter(...)

function sum(...x){
    let sum = 0; 
    for(let a of x){
        sum = sum + a; 
    }
    return sum; 
}
let p = sum(1, 2, 3, 4, 5); 
console.log(p); //15
