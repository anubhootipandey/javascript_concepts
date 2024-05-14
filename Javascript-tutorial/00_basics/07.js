//function declaration

// function randomText(){
//     console.log("Happy Birthday To You....");
// }
// randomText()

// function twoPlusFour(){
//     return 2 + 4;
// }

// console.log(twoPlusFour());

// function sumOfTwoNumbers(num1, num2){
//     return num1 + num2;
// }
// const result = sumOfTwoNumbers(56, 78);
// console.log(result + 34 + "55");

/* Create a function isEven() and it takes one number as a input
and gives boolean output i.e true or false */

// function isEven(num){
//     return num%2==0 ? true : false;
// }
// console.log(isEven(2));


/*Create a function that takes string as an input and gives 
firstCharacter as a output*/

// function firstChar(anyStr){
//     return anyStr[0];
// }
// console.log(firstChar("abcd"));


//create function
//input: array, target (number)
//output: index of target if target preasent in array
//[1, 2, 3, 4, 5]----3

// function findTarget(arr, target){
//     for(let i=0; i<arr.length; i++){
//         if(arr[i]===target){
//             return i;
//         }
//     }
//     return -1;
// }

// const myArr = [1, 2, 3, 6, 7]
// const res = findTarget(myArr, 7)
// console.log(res);


/*----------------------------------------------------------------------------------------------------*/

//-------Function expression-------

// const sum = function(){
//     console.log("hello" + " " + 34);
// }
// sum();

//arrow function

const sum = (a, b) => {
    return a + b;
} 
console.log(sum(3, 4));
