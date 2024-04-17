console.log([1, 2] == [1, 2]);

//Task1: Output 
//-----false

//------REASON
// When you use the === operator to compare two arrays, you're actually comparing whether they refer to the exact 
// same memory location in the computer's memory. In this case, even though the two arrays have the same values [1, 2, 3], 
// they are two separate instances in memory, and therefore their references are not the same.

// If you want to compare the content of two arrays for equality, you would need to do a deep comparison, checking 
// each element of the arrays to see if they are equal. You can achieve this using various methods, such as a loop 
// or by converting the arrays to strings and comparing the strings.

const array1 = [1, 2, 3]; 
const array2 = [1, 2, 3]; 
 
// Comparing the content of arrays using JSON.stringify 
const isEqual = JSON.stringify(array1) === JSON.stringify(array2); 
console.log(isEqual); // true 