/* ------------------------------DEFAULT PARAMETERS
Default parameters in JavaScript allow you to specify default values for function parameters. 
If an argument is not provided for a parameter when the function is called, the default value is used. 
This feature helps in avoiding undefined values and makes functions more robust and easier to use.
*/

// Syntax
// The syntax for default parameters is straightforward. 
// You assign a default value to a parameter using the assignment operator (=) in the function's parameter list.
function functionName(parameter1 = defaultValue1, parameter2 = defaultValue2) {
    // function body
  }
// Example
function greet(name = 'Guest', greeting = 'Hello') {
    console.log(`${greeting}, ${name}!`);
}
greet(); // Output: Hello, Guest!
greet('Alice'); // Output: Hello, Alice!
greet('Bob', 'Hi'); // Output: Hi, Bob!
  
// In this example:

// The greet function has two parameters: name and greeting.
// Both parameters have default values: 'Guest' for name and 'Hello' for greeting.
// When the function is called without arguments, it uses the default values.
// When the function is called with one argument, it uses the provided argument for name and the default value for greeting.
// When the function is called with both arguments, it uses the provided values.

/*--------------------------------------------------------------------------------------------------------------------------*/

/*-----------------------------> Handling Undefined Arguments
If an argument is explicitly passed as undefined, the default value will be used. 
However, if null is passed, it will override the default value.
*/
function displayMessage(message = 'Default message') {
    console.log(message);
}
displayMessage(); // Output: Default message
displayMessage(undefined); // Output: Default message
displayMessage(null); // Output: null
displayMessage('Hello, World!'); // Output: Hello, World!
  

/* ------------------------------->Default Parameters and Function Calls
Default parameters are evaluated at the time of function call, which means you can use other parameters or even function calls as default values.
*/
function multiply(a, b = a * 2) {
    return a * b;
}
console.log(multiply(5)); // Output: 50 (b is 5 * 2)
console.log(multiply(5, 3)); // Output: 15 (b is 3)
  
// In this example:

// The multiply function has two parameters: a and b.
// The default value for b is a * 2, which is evaluated at the time of the function call.
// When the function is called with one argument, b is set to a * 2.
// When the function is called with both arguments, b uses the provided value.


// Default parameters in JavaScript provide a way to set default values for function parameters, 
// making functions more flexible and reducing the need for additional checks and fallback logic 
// inside the function body. They enhance code readability and robustness, especially when dealing 
// with optional parameters.

