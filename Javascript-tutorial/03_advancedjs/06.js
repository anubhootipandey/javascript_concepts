//----function returning promises------->

function ricePromise(){
    const bucket = ["coffee", "chips", "vegetables", "salt", "rice"];
    return new Promise((resolve, reject) => {
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
}

ricePromise().then(
    (myFriedRice) => {
      console.log("Lets eat", myFriedRice);
    }).catch((error) => {
      console.log(error);
    })











