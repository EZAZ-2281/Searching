ES6 modules
.html file
<body>
    <script src="./App.js" type="module"></script>
    <h1>ES6 Modules import and export</h1>
</body>
.js file
class Display{  
    show(){  
        console.log("Hello World :)");  
    }  
}  
function myFunc(){  
    console.log("Welcome to javaTpoint");  
}  
export {Display,myFunc}; 
.js file
import {Display,myFunc} from "./Mobile.js";  
let d = new Display();  
d.show();  
myFunc();  




ES6 default module
.html file
<body>
    <script src="./App.js" type="module"></script>
    <h1>ES6 Modules import and export</h1>
</body>
class Display{  
    show(){  
        console.log("Hello World :)");  
        console.log("Default module example");
    }  
}  
export default Display; 
import Display from "./Mobile.js";  
let d = new Display();  
d.show();




ES6 Cyclic dependencies module
.html file
<body>
    <script src="./App.js" type="module"></script>
    <h1>ES6 Modules import and export</h1>
</body>
.js file
export let count = 0;  
export function show() {  
    count++;  
} 
.js file
import { show, count } from './Mobile.js';  
console.log(count);   
show();  
console.log(count);  //0, 1  

