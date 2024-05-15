Lexical scope in JavaScript is all about where variables and functions are available for use, based on where they are written in the code. Let's break it down with simpler terms and an example:

Lexical Scope: This means that the location where you write your code determines what variables and functions you can access. It's also known as static scope because it doesn't change, no matter where you call the function.

Scope Chain: When a variable is used, JavaScript looks for that variable in the current scope. If it can't find it, it looks in the next outer scope, and so on, until it either finds the variable or reaches the global scope.

Global Scope: Variables defined outside of any function are in the global scope and can be accessed anywhere in the code.

Local Scope: Variables defined inside a function are in the local scope and can only be accessed within that function.