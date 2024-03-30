/*----------------Pass by Value:
When a primitive value (such as a number or string) is passed to a function, a copy of that value is made and passed to the function. 
Modifying the parameter within the function does not affect the original value outside the function.
*/
function modifyValue(value) {
    value = 10; // Modifying the parameter
    console.log(value); // Output: 10
  }
  
  let x = 5;
  modifyValue(x);
  console.log(x); // Output: 5 (original value remains unchanged)
  
/*---------------Pass by Reference:
When an object or array is passed to a function, its reference (memory address) is passed to the function. 
Therefore, modifications made to the object or array inside the function will affect the original object or array outside the function.
*/
function modifyArray(arr) {
    arr.push(4); // Modifying the parameter (array)
    console.log(arr); // Output: [1, 2, 3, 4]
  }
  
  let myArray = [1, 2, 3];
  modifyArray(myArray);
  console.log(myArray); // Output: [1, 2, 3, 4] (original array is modified)
  