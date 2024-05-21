//Guess the Array.from output

const result = Array.from({length: 10}, (v ,i) => i);
console.log(result);

//My answer:-

//[0, 1, 2, 3, 4, 5, 6, 7, 8, 9]

//explanation
//{ length: 10 } specifies the length of the array to create.
//(v, i) => i is the mapping function. v is the value 
//(which is unused here), and i is the index. 
//So, it returns the index i, which starts from 0 and 
//goes up to 9.

