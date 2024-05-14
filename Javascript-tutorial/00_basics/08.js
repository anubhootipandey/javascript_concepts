//---------------Hoisting--------------------

// hello();

// // function hello(){
// //     console.log("Hello world!!");
// // }

// const hello = () => {
//     console.log("Hello world!!");
// }

// console.log(hello);//undefined
// var hello = "Hello!!";
// console.log(hello);


//-------function inside function---------

// const app = () => {
//     const myFunc = () => {
//         console.log("Hello");
//     }

//     const nul = (num1, num2) => num1 + num2;
//     console.log("inside app");
//     myFunc();
// }
// app();


//------lexical scope-------------

// const myVar = "value234";

// function app(){
//     // const myVar = "val1";
//     function myFunc(){
//         const myVar = "value23";
//         console.log("inside myFunc", myVar);
//     };
//     // const myFunc1 = function(){};
//     // const myFunc2 = () => {};

//     console.log(myVar);
//     myFunc();
// }

// app();

const myVar = 67;

function app(){
    function myFunc(){
        // const myVar = "value23";
        const myFunc2 = () => {
            console.log("inside myFunc2", myVar);
        }
        myFunc2();
    };
    console.log(myVar);
    myFunc();
}
    
app();

