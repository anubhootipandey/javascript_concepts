//------------closures-----------


//function can return function
// function outerFunction(){
//     function innerFunction(){
//         console.log("Hello");
//     }
//     return innerFunction;
// }

// const res = outerFunction();
// // console.log(res);
// res();

function printFullName(firstName, lastName){
    function printName(){
        console.log(firstName, lastName);
    }
    return printName;
}

const res = printFullName("anu", "pandey");
// console.log(res);
res();








