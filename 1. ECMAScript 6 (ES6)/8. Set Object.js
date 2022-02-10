javaScript Sets
let a = new Set(); 
a.add("D"); 
a.add("I"); 
a.add("U"); 
console.log(a); //{'D', 'I', 'U'}
console.log(a.size); //3
let b = new Set(["a", "b", "c"]); 
console.log(b); //{'a', 'b', 'c'}




Create a Set and add variables
let s = new Set(); 
let a = "D"; 
let b = "I"; 
let c = "U"; 
s.add(a); 
s.add(b); 
s.add(c); 
console.log(s); //{'D', 'I', 'U'}
console.log(s.size); //3


let s = new Set(["D", "I", "U"]); 

s.forEach(function(value){
    console.log(value); //D\nI\nU
})

let q = s.values(); 
for(let p of q){
  console.log(p); //D\nI\nU
}

let y = s.values(); 
for(let x of y){
  console.log(x); //D\nI\nU
}

//entries() returns [value,value] pairs
let f = s.entries(); 
for(let e of f){
  console.log(e);
}

console.log(typeof(s)); //object
let t = s instanceof Set; 
console.log(t); //true
console.log(s.size); //3
console.log(s.clear()); //undefine

