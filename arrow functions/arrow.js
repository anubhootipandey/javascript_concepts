/*-------------------Arrow Function Expression--------------------*/

// const square = (num) => {
//     return num * num //Explicit return-> returns the value using return keyword
// }

//The above code can also be written as the below code:-
const square = num =>  num * num //if there is only argument then it is not compulsory to use bracket.

//Add function
const add = (x, y) => x + y //Implicit return-> it returns the value without using return keyword.

const random = () => Math.floor(Math.random() * 10) + 1

//This is an anonymous function as well as arrow function
setTimeout(() => {
    //debugger
    console.log("Hello World")
}, 2000)