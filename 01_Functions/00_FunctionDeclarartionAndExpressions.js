/* ------------------------> Function Declaration
A function declaration defines a function with a specified name. 
Function declarations are hoisted, which means they are moved to the top of their 
containing scope during the compile phase, allowing you to call the function before its actual declaration in the code.
*/
// Syntax:
function functionName(parameters) {
  // function body
  // code to be executed
}

// Example:
// Calling the function before its declaration due to hoisting
greet();
function greet() {
  console.log('Hello, World!');
}
// Output: Hello, World!

/* ---------------------------> Function Expression
A function expression defines a function inside an expression and can be either named or anonymous. 
Function expressions are not hoisted, meaning they are not available until the execution reaches 
the point in the code where they are defined.
*/
// Syntax: 
let functionName = function(parameters) {
    // function body
    // code to be executed
  };

// Example:
// This will throw an error because the function is not hoisted
// greet(); // Uncommenting this line will cause a ReferenceError
let greet = function() {
    console.log('Hello, World!');
};
greet(); // Output: Hello, World!
  
/* --------------------------> Named Function Expression
A named function expression includes a name, which can be useful for debugging purposes or 
for calling the function recursively.
*/
// Syntax: 
let functionName = function namedFunction(parameters) {
    // function body
    // code to be executed
};

// Example:
let factorial = function fact(n) {
    if (n <= 1) {
      return 1;
    } else {
      return n * fact(n - 1); // Recursive call
    }
}; 
console.log(factorial(5)); // Output: 120
  
/* --------------------------------> Arrow Functions (ES6)
Arrow functions are a shorthand way to write function expressions introduced in ES6. 
They do not have their own this context and are always anonymous.
*/
// Syntax:
let functionName = (parameters) => {
    // function body
    // code to be executed
};

// Example:
let greet = () => {
    console.log('Hello, World!');
  };
greet(); // Output: Hello, World!
  

/*------------------------------------------------------------------------------------------------
1. Function Declaration: 
Defined with the function keyword, named, hoisted, available throughout the scope.

2. Function Expression: 
Defined inside an expression, can be anonymous or named, not hoisted, available after definition.

3. Named Function Expression: 
Function expression with a name, useful for recursion and debugging.

4. Arrow Function: 
Concise syntax, always anonymous, no own this context, introduced in ES6.
-----------------------------------------------------------------------------------------------------*/
  






