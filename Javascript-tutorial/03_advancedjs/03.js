//---------understand callbacks-------------->

// function myFunc(callback){
//     console.log("Function 1");
//     callback();
// }

// // function myFun2(){
// //     console.log("Function 2");
// // }

// // myFun2();
// // myFunc();

// myFunc(() => {
//     console.log("Hey there!");
// });

function getNAddTwoNumbers(num1, num2, onSuccess, onFailure){
    if(typeof num1 === "number" && typeof num2 === "number"){
        onSuccess(num1, num2);
    } else{
        onFailure();
    }
}

// function addTwoNumbers(number1, number2){
//     console.log(number1 + number2);
// }

getNAddTwoNumbers(4, 5, (number1, number2) => {
    console.log(number1 + number2);
}, () => {
    console.log("Wrong Data type!");
    console.log("Please pass numbers only");
});









