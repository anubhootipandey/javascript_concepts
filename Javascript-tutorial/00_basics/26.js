//compilation
//code execution

//why compilation

//how javascript code executes

//what is global execution context?
//what is local excution context?
//closures

console.log(this);
console.log(window);
console.log(firstName);
var firstName = "Name";

/*
In JavaScript, the function execution context is a concept that defines the environment in which a function is executed. It contains all the information required for the function to run, including variables, the value of this, and the scope chain.
Here's a simpler breakdown:

Creation Phase:

When a function is called, JavaScript creates an execution context for that function.
During this phase, the function's arguments are created and initialized with the values passed to the function.
A special variable called this is created and assigned a value (depending on how the function is called).
A scope chain is established to determine where to look for variables.

Execution Phase:

In this phase, the code inside the function is executed line by line.
Variables declared within the function are initialized.
Function calls within the function create their own execution contexts, which get added to the call stack.

*/

//----------------------------------------------------------------------------------------------------------------------------------------------------------------------------

/*
Key Components of a Function Execution Context
Variable Object (VO): Contains function arguments, local variables, and function declarations.
Scope Chain: References the outer environment to resolve variables not found in the current function.
this Binding: Refers to the context in which the function was called.

*/



