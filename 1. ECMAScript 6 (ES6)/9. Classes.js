Class in javaScript
class Car{
  constructor(name, year){
    this.name = name; 
    this.year = year; 
  }
}
let car1 = new Car("Ford", 2011); 
console.log(car1.name+" "+car1.year); //Ford 2011





Class
class Car{
  constructor(name, year){
    this.name = name; 
    this.year = year; 
  }
  age(){
    let date = new Date(); 
    let d = date.getFullYear() - this.year; 
    return d; 
  }
}
let car1 = new Car("Ford", 2011); 
console.log("My car age is: "+car1.age());
//My car age is: 11





Send parameters to Class methods
class Car{
  constructor(name, year){
    this.name = name; 
    this.year = year; 
  }
  age(a){
      return a - this.year; 
  }
}
let car1 = new Car("Ford", 2011); 
let date = new Date(); 
let a = date.getFullYear(); 
console.log("My car age is: "+car1.age(a));
//My car age is: 11


A JavaScript class is not an object. It is a template for JavaScript objects. The constructor method is called automatically when a new object is created.
