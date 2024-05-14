//-----------------------Callback function--------------------

// function app(){
//     console.log("hello!!!");
// }

// function app2(a){
//     console.log(a);
// }


// app(app2(2));

// function app1(name){
//     console.log("inside app1");
//     console.log(`your name is ${name}`);
// }

// function app2(callback){
//     console.log("Hello");
//     callback("anu");
// }

// app2(app1);
 

//-----------------------function returning function------------------


function myFun(){
    function hello(){
        return "Hello World!!"
    }
    return hello;
}

const res = myFun();
console.log(res());

//higher order function--> it takes function as an input and 
//returns function as a output.

function app(){
    return function app1(){
        return "Anubhooti Pandey!";
    };
}

const ans = app();
console.log(ans());

