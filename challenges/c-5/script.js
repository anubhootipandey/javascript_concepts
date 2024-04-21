console.log([1, 2] == [1, 2]);

//Task1: Output 
//-----false

//------REASON
// This might seem counter intuitive at first, but it's important to understand how JavaScript compares arrays. 
// When you use the equality operator (==), JavaScript compares the references of the arrays, not their contents. 
// Since arrays are reference types in JavaScript, even if two arrays have the same values, they are considered different if they occupy different memory locations.

// In this case, [1, 2] and [1, 2] are two distinct arrays, each occupying its own memory space. 
// So, when you compare them using ==,JavaScript sees them as different references and returns false.

const array1 = [1, 2, 3]; 
const array2 = [1, 2, 3]; 
 
//Task2: Comparing the content of arrays using JSON.stringify 
const isEqual = JSON.stringify(array1) === JSON.stringify(array2); 
console.log(isEqual); // true 