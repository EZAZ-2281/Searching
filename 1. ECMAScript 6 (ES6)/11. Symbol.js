The Symbol Type


A JavaScript Symbol is a primitive datatype just like Number, String, or Boolean.
let person = {
    nam: "Kibria",
    age: 20
}; 
let id = Symbol("id"); 
person[id] = 10; 
console.log(person[id]); //10
Symbol("id") == Symbol("id") // false
