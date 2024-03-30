/*
Promises in JavaScript are objects representing the eventual completion or failure of an asynchronous operation and its resulting value. 
They provide a cleaner and more flexible way to work with asynchronous code compared to traditional callback functions. 
Promises can be in one of three states: pending, fulfilled, or rejected.
*/

// Creating a new Promise
const myPromise = new Promise((resolve, reject) => {
    // Simulating an asynchronous operation (e.g., fetching data)
    setTimeout(() => {
      const success = true;
      if (success) {
        resolve("Data fetched successfully"); // Resolve with a value
      } else {
        reject("Error fetching data"); // Reject with an error
      }
    }, 2000); // Simulate delay of 2 seconds
  });
  
  // Consuming the Promise using then() and catch()
  myPromise
    .then((result) => {
      console.log("Promise resolved:", result); // Output: Promise resolved: Data fetched successfully
    })
    .catch((error) => {
      console.error("Promise rejected:", error); // Output: Promise rejected: Error fetching data
    });
  
/*
Promises allow for better handling of asynchronous operations and make it easier to chain asynchronous operations together, avoiding callback hell. 
They also provide built-in error handling through the catch() method.
*/

/*
The then() method is used to handle the fulfilled state of the Promise, where you provide a callback function that will be executed when the Promise is resolved successfully. 
The callback receives the resolved value as an argument.
The catch() method is used to handle the rejected state of the Promise, where you provide a callback function that will be executed when the Promise is rejected. 
The callback receives the rejection reason (error) as an argument.
*/