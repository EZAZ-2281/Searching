Map Object Details
let a = {
  name: "Apple"
}
let b = {
  name: "Banana"
}
let c = {
  name: "Orange" 
}
let m = new Map(); 
m.set(a, 10); 
m.set(b, 11); 
m.set(c, 12); 
console.log(m);
console.log(m.get(a)); //10
console.log(m.size); //3
The key is an object (a), not a string ("a"):
fruits.get("a");  // Returns undefined


We can create a Map by passing an Array to the new Map()
let fruits = new Map([
  ["Apple", 10],
  ["Banana", 11], 
  ["Orange", 12]
]); 

let fruits = new Map(); 
fruits.set("Apple", 10); 
fruits.set("Banana", 11); 
fruits.set("Orange", 12); 
console.log(fruits);
/* set() method can also be used to change existing Map values */
fruits.set("Apple", 9); 
console.log(fruits);
let p = fruits.get("Apple"); 
console.log(p); //9
console.log(fruits.size); //3
console.log(fruits.delete("Apple"));
console.log(fruits.size); //2
console.log(fruits.has("Apple")); //false cuz we delete "Apple" before
console.log(typeof(fruits)); //object
console.log(fruits instanceof Map); //true always return true

//Map.forEach()
fruits.forEach(function(value, key){
  console.log(key+" = "+value);
})
//Map.keys()
for(let a of fruits.keys()){
  console.log(a); //Banana\nOrange
}
//Map.values()
for(let v of fruits.values()){
  console.log(v); //11\n12
}
//Map.entries()
for(let e of fruits.entries()){
  console.log(e);
}

console.log(fruits.clear()); //undefined
