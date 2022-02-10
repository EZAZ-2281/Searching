Arrow function and normal function
/* normal function */
let a = function(x, y){
  return x +  y; 
}
let x = a(3, 4)
console.log(x); //7

/* array function */
let f = (s, t) => {
  return s + t; 
}
let e = f(1, 2); 
console.log(e); //3
//or, 
let p = (m, n) => m + n; 
let q = p(5, 6); 
console.log(q); //11
//another example
let hello = function(){
  return "Kibria"; 
}
console.log(hello()); //Kibria
let hellow = () => {
  return "Kibria2"; 
}
console.log(hellow()); //kibria2
let hellow2 = () => "Kibria3"; 
console.log(hellow2()); //Kibria3
let helloww = (mes) => "Kibria "+mes; 
let mes2 = helloww("Ezaz"); 
console.log(mes2); //Kibria Ezaz
let helloww2 = mes22 => "Kibria "+mes22; 
let mes22 = helloww2("Rahim"); 
console.log(mes22); //Kibria Rahim
