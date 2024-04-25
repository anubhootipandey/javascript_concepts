// var x = 20;// Outer scope variable declaration

// function myFun(){
//     console.log(x);// Logs undefined because of hoisting
//     var x = 10;// Inner scope variable declaration
// }
// myFun();// Calls the function

//In JavaScript, due to variable hoisting, the var declaration is hoisted to the top of the function scope. However, only the declaration gets hoisted, not the initialization.
//So, when you run the myFun function, it logs undefined instead of 20 because var x is hoisted to the top of the function scope, and at that point, it is initialized as undefined. Therefore, the inner x variable is declared within the function scope, and it shadows the outer x variable.

/******************************************************************* */

// let x = 20;
// function myFun(){
//     console.log(x);
//     var x = 10;
// }
// myFun();

//o/p--undefined

/***************************************************************** */

// let x = 20;
// function myFun(){
//     console.log(x);
//     let x = 10;
// }
// myFun();

//In this JavaScript code, you're using let to declare the variable x inside the function myFun. Unlike var, let has block-level scope and is not hoisted to the top of the block. Therefore, when you try to log x before its declaration, it will result in a reference error.

/************************************************************** */

// function outer(){
//     function inner(){
//         console.log(x);
//     }
//     const x = 5;
//     return inner;
// }
// const inner = outer()
// inner()

// //o/p---5

/*************************************************************************** */

// console.log("Start");
// setTimeout(() => {
//     console.log("Timeout");
// }, 0)
// console.log("End");

//o/p---Start End Timeout

/************************************************************ */

for(var i=1; i<=3; i++){
    setTimeout(() => {
        console.log(i);
    }, 1000)
}

//Task 1:- fix the above code---->

// for(let i=1; i<=3; i++){
//     setTimeout(() => {
//         console.log(i);
//     }, i*1000)
// }

//-----------OR-------------

for(var i=1; i<=3; i++){
    const timer = (i) => {
        setTimeout(() => {
            console.log(i);
        }, i*1000)
    }
    timer(i);
}

/************************************************************************ */



