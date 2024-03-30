/*
Hoisting in JavaScript is a mechanism where variables and function declarations are moved to the top of their containing scope during the compile phase. 
This means that regardless of where variables and functions are declared within a scope, they are accessible and usable throughout that scope.

*/


//---------------------Variable Hoisting--------------------------
console.log(x); // Output: undefined
var x = 5;
console.log(x); // Output: 5
/*
Even though x is accessed before it's declared, it doesn't throw an error. Instead, it logs undefined. This is because variable declarations are hoisted to the top of their containing scope during the compilation phase, but their assignments remain in place. So, var x is effectively interpreted as var x = undefined initially.
Later, the assignment x = 5 is executed, and x gets the value 5.
*/

//-----------------------Function Hoisting--------------------------
myFunction();// Output: helloWorld
function myFunction(){
    console.log("helloWorld")
}

/*
Similar to variable hoisting, function declarations are also hoisted to the top of their containing scope during the compilation phase.
Therefore, you can call myFunction() before its actual declaration without throwing an error.
------However, it's important to note that function expressions (functions defined using the var, let, or const keywords) 
are not hoisted like function declarations. 
Only the variable declaration (if any) gets hoisted, not the function assignment.
*/

//Example with function expression:
myFunction(); // TypeError: myFunction is not a function

var myFunction = function() {
  console.log("Hello, world!");
};

/*
In this case, only the variable myFunction gets hoisted to the top of the scope, not the function itself.
Therefore, when trying to call myFunction() before its declaration, it throws a TypeError since myFunction is undefined at that point.
*/