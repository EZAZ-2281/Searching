Use Strict

"use strict"; Defines that JavaScript code should be executed in "strict mode". Strict mode makes it easier to write "secure" JavaScript.
"use strict";
x = 3.14;       // This will cause an error because x is not declared

"use strict";
myFunction();

function myFunction() {
  y = 3.14;   // This will also cause an error because y is not declared
}


Declared inside a function, it has local scope (only the code inside the function is in strict mode):
x = 3.14;       // This will not cause an error.
myFunction();

function myFunction() {
  "use strict";
  y = 3.14;   // This will cause an error
}

"use strict";
function myFunction() {
  alert(this); // will alert "undefined"
}
myFunction();

