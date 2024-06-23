// Declaration hoisting (conceptual explanation, not actual code)
// let obj1; // 'obj1' is hoisted to the top of the block, but remains uninitialized (in TDZ)

obj1 = { a: 10 };  // Attempt to assign a value to 'obj1' while it's in the TDZ -> ReferenceError
const obj2 = obj1; // This line won't be executed due to the error above
obj2.a = 20;
console.log(obj1);
console.log(obj2);
let obj1; // Actual declaration of 'obj1' (leaves the TDZ here)





