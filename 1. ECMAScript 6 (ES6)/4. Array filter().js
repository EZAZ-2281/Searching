Array filter()
function myFunc(value, index, array){
  return value > 5; 
}
function myFunc(value){
  return value > 5; 
}
let num = [2, 3, 5, 7, 9]; 
let a = num.filter(myFunc); 
console.log(a); //[7, 9]
