// {
//     let a = 1;
//     let b = 2;
//     var c = 3;
//     console.log(a);//output: 1
//     console.log(b);//output: 2
//     // console.log(c);
// }
// console.log(a)// ReferenceError: a is not defined
// console.log(b);// ReferenceError: b is not defined
// console.log(c);

//-----This is because a and b are scoped to the block in which they are declared. Trying to access them outside of that block will result in a ReferenceError.

function myFun(){
    let a = 1;
    let b = 2;
    var c = 3;
    console.log(a);
    console.log(b);
}

myFun();

console.log(a)
console.log(b);
console.log(c);//undefined