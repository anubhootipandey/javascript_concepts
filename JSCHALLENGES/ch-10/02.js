//Flatten an array of arrays

let arr = [ [0, 1], [2, 3], [4, 5]];


//My answer-

// const res = arr.flat(1);
// console.log(res);

//Second answer using reduce method
const flattedArr = arr.reduce((accumulator, currentValue) => 
accumulator.concat(currentValue)
)

console.log(flattedArr);