//----Promise.resolve----------------->
//----Promise chaining---------------->

// const myPromise = Promise.resolve(5);
// myPromise.then((value) => {
//     console.log(value);
// })

//then() ----> it always return promise

function myPromise() {
  return new Promise((res, rej) => {
    res("foo");
  });
}

myPromise().then((value) => {
  console.log(value);
  value +=  "bar";
  return value;
}).then((value) => {
    console.log(value);
    value += "l";
    return value;
}).then((value) => {
    console.log(value);
})


