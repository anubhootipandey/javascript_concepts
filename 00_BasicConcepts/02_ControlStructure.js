/* ----------------CONTROL STRUCTURE------------->
Control structures are used in programming to dictate the flow of control through a program. 
JavaScript, like many other programming languages, includes several types of control structures, 
including conditional statements, loops, and exception handling.
*/

// 1.Conditional Statements

/* -----------------------> if Statement
The if statement executes a block of code if a specified condition is true.
*/
let age = 18;

if (age >= 18) {
    console.log("You are an adult.");
}

/* -------------------------> if...else Statement
The if...else statement executes a block of code if a condition is true, and another block of code if the condition is false.
*/
let marks = 33;

if (marks >= 33) {
    console.log("You are passed.");
} else {
    console.log("You are fail.");
}

/* --------------------------> else if Statement
The else if statement specifies a new condition to test if the first condition is false.
*/
let score = 85;

if (score >= 90) {
    console.log("Grade: A");
} else if (score >= 80) {
    console.log("Grade: B");
} else if (score >= 70) {
    console.log("Grade: C");
} else {
    console.log("Grade: F");
}

/* ------------------------> switch Statement
The switch statement is used to perform different actions based on different conditions.
*/
let day = 2;
let dayName;

switch (day) {
    case 0:
        dayName = "Sunday";
        break;
    case 1:
        dayName = "Monday";
        break;
    case 2:
        dayName = "Tuesday";
        break;
    case 3:
        dayName = "Wednesday";
        break;
    case 4:
        dayName = "Thursday";
        break;
    case 5:
        dayName = "Friday";
        break;
    case 6:
        dayName = "Saturday";
        break;
    default:
        dayName = "Invalid day";
}

console.log(dayName); // Output: Tuesday

// 2.LOOPS

/*------------------------------> for Loop
The for loop repeats a block of code a specified number of times.
*/
for (let i = 0; i < 5; i++) {
    console.log('Iteration number: ' + i);
}
  
/* ---------------------------> while Loop
The while loop repeats a block of code as long as a specified condition is true.
*/

let i = 0;

while (i < 5) {
  console.log('Iteration number: ' + i);
  i++;
}

/* ------------------------> do...while Loop
The do...while loop is similar to the while loop, but it executes the block of code at least once before checking the condition.
*/
let j = 0;

do {
  console.log('Iteration number: ' + j);
  j++;
} while (j < 5);

/* ---------------------------> for...in Loop
The for...in loop iterates over the properties of an object.
*/
let person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30
  };
  
  for (let key in person) {
    console.log(key + ': ' + person[key]);
  }

/* -----------------------> for...of Loop
The for...of loop iterates over the values of an iterable object, such as an array.
*/
let numbers = [1, 2, 3, 4, 5];

for (let number of numbers) {
  console.log(number);
}

// 3.Branching Statements

/* ------------------------> break Statement
The break statement exits a loop or a switch statement.
*/
for (let i = 0; i < 10; i++) {
    if (i === 5) {
      break;
    }
    console.log('Iteration number: ' + i);
  }
  // Output: 0, 1, 2, 3, 4

/* -------------------------------> continue Statement
The continue statement skips the current iteration of a loop and moves to the next iteration.
*/
for (let i = 0; i < 10; i++) {
    if (i === 5) {
      continue;
    }
    console.log('Iteration number: ' + i);
  }
  // Output: 0, 1, 2, 3, 4, 6, 7, 8, 9

/* ---------------------------------> return Statement
The return statement exits a function and returns a value from that function.
*/
function sum(a, b) {
    return a + b;
  }
  
  let result = sum(5, 3); // result is 8
  





