// A function that returns a promise after a certain time
function waitForSomeTime(ms) {
    return new Promise(resolve => {
      setTimeout(resolve, ms);
    });
  }
  
  // An asynchronous function using async/await
  async function exampleAsyncFunction() {
    console.log("Starting...");
    
    // Wait for 2 seconds
    await waitForSomeTime(2000);
    
    console.log("After 2 seconds");
    
    // Wait for another 3 seconds
    await waitForSomeTime(3000);
    
    console.log("After another 3 seconds");
    
    return "Done";
  }
  
  // Call the async function and handle its result using then() method
  exampleAsyncFunction()
    .then(result => {
      console.log(result); // Output: Done
    })
    .catch(error => {
      console.error(error);
    });
  