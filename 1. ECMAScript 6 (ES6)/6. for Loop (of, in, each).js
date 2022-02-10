/* for of loop */
let a = ["Kibria", "Rahim", "Karim"]; 
for(let n of a){
  console.log(a);
}

let s = "Kibria"; 
for(let st of s){
  console.log(st);
}


/* for in */
let info = {
  fName: "Arnob",
  age: 20
}
for(let p in info){
  console.log(info[p]);
}
let num = [1, 2, 3, 4, 5]; 
for(let n in num){
  console.log(num[n]);
}


/* forEach */
//this three forEach is same
num.forEach(function myFunc(value, index, array){
  console.log(value);
}); 
num.forEach(myFunc); 
function myFunc(value, index, array){
  console.log(value);
}
num.forEach(myFunc); 
function myFunc(value){
  console.log(value);
}
