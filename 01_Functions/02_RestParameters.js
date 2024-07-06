/* --------------------> REST PARAMETERS
Rest parameters in JavaScript allow a function to accept an indefinite number of arguments as an array. 
This is particularly useful when you don't know in advance how many arguments will be passed to the function. 
The rest parameter syntax allows you to represent an indefinite number of arguments as an array.
*/

// Syntax
// Rest parameters are indicated by three dots (...) followed by the parameter name. 
// This parameter must be the last in the function's parameter list, as it collects all remaining arguments.
function functionName(...restParameter) {
    // function body
  }

// Example 1: Summing Numbers
function sum(...numbers) {
    return numbers.reduce((total, number) => total + number, 0);
  }
  
  console.log(sum(1, 2, 3)); // Output: 6
  console.log(sum(1, 2, 3, 4, 5)); // Output: 15
  console.log(sum()); // Output: 0
//   In this example:

//   The sum function uses the rest parameter ...numbers to collect all arguments into an array named numbers.
//   The reduce method is used to calculate the sum of the array elements.  

// Example 2: Creating a Sentence
function createSentence(...words) {
    return words.join(' ');
  }
  
  console.log(createSentence('JavaScript', 'is', 'awesome')); // Output: JavaScript is awesome
  console.log(createSentence('I', 'love', 'coding')); // Output: I love coding
//   In this example:

//   The createSentence function uses the rest parameter ...words to collect all arguments into an array named words.
//   The join method is used to concatenate the array elements into a single string, separated by spaces.  

// Example 3: Mixed Parameters
function greet(greeting, ...names) {
    return `${greeting}, ${names.join(' and ')}!`;
  }
  
  console.log(greet('Hello', 'Alice', 'Bob')); // Output: Hello, Alice and Bob!
  console.log(greet('Hi', 'Charlie', 'Dave', 'Eve')); // Output: Hi, Charlie and Dave and Eve!
//   In this example:

//   The greet function has a regular parameter greeting followed by the rest parameter ...names.
//   The names rest parameter collects all remaining arguments into an array.
//   The function returns a greeting message that includes all the names.  

// Example 4: Using Rest Parameters in Arrow Functions
const multiply = (multiplier, ...numbers) => {
    return numbers.map(number => number * multiplier);
};
  
console.log(multiply(2, 1, 2, 3)); // Output: [2, 4, 6]
console.log(multiply(3, 4, 5)); // Output: [12, 15]
//   In this example:

//   The multiply arrow function has a regular parameter multiplier followed by the rest parameter ...numbers.
//   The numbers rest parameter collects all remaining arguments into an array.
//   The map method is used to multiply each number in the array by the multiplier.  


// Rest parameters in JavaScript provide a flexible way to handle functions 
// with an indefinite number of arguments. They simplify the process of working 
// with variadic functions (functions that take a variable number of arguments) 
// and make your code more concise and readable.

