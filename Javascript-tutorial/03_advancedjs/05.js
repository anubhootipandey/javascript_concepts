//-----------------promises----------------------->

console.log("script starts");

const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];

const friedRice = new Promise((resolve, reject) => {
  if (
    bucket.includes("vegetables") &&
    bucket.includes("salt") &&
    bucket.includes("rice")
  ) {
    resolve({Recipe: "Fried Rice"});
  } else {
    reject(new Error("something missing from bucket!"));
  }
});

//produce

//consume
//how to consume
friedRice.then(
  (myFriedRice) => {
    console.log("Lets eat", myFriedRice);
  }).catch((error) => {
    console.log(error);
  })

setTimeout(() => {
    console.log("I am setTimeOut!");
}, 0)

for(let i=0; i<=100; i++){
    console.log(Math.random(), i);
}

console.log("script ends");










