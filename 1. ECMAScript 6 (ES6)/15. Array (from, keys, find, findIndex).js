Array.from()
let a = Array.from("ABCDEFG"); 
console.log(a); //['A','B','C','D','E','F','G']


Array keys()
let nam = ["Kibria", "Rahim", "Karim"]; 
let k = nam.keys(); 
for(let a of k){
    console.log(a); //0 1 2
}


Array find()
function myFunction(value, index, array){
    return value > 13;     
}
let a = [10, 12, 14, 16, 20]; 
let p = a.find(myFunction); 
console.log(p); //14


Note that the function takes 3 arguments:
The item value
The item index
The array itself


Array findIndex()
function myFunction(value, index, array){
    return value > 13;     
}
let a = [10, 12, 14, 16, 20]; 
let p = a.findIndex(myFunction); 
console.log(p); //2
