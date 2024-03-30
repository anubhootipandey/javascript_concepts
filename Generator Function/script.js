/*Generator functions are a special type of function in JavaScript that can pause and resume their execution, allowing for asynchronous-like behavior in synchronous code. 
They are defined using the function* syntax and contain one or more yield expressions.
*/

function* generateSequence() {
    yield 1;
    yield 2;
    yield 3;
  }
  
  const generator = generateSequence();
  
  console.log(generator.next()); // Output: { value: 1, done: false }
  console.log(generator.next()); // Output: { value: 2, done: false }
  console.log(generator.next()); // Output: { value: 3, done: false }
  console.log(generator.next()); // Output: { value: undefined, done: true }
  

/*Generator functions are often used to implement custom iteration behavior, asynchronous control flow, and lazy evaluation. They provide a powerful mechanism for writing clean and readable code, especially in scenarios where complex asynchronous operations need to be performed sequentially.

Here's an example of using a generator function for a custom iterable object:
*/
const customIterable = {
    *[Symbol.iterator]() {
      yield 1;
      yield 2;
      yield 3;
    }
  };
  
  for (const value of customIterable) {
    console.log(value);
  }
  