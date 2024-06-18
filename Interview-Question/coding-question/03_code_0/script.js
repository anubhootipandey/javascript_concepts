//Task: Write a promise function
//less than 4 resolved and greater than 4 reject

const promiseExample = new Promise((res, rej) => {
  let value = 5;

  if (value < 4) {
    res("Value is less than 4");
  } else {
    rej("Value is greater than 4");
  }
});

promiseExample
  .then((result) => {
    console.log("The result =>", result);
  })
  .catch((error) => {
    console.log(error);
  });
