// console.log("Start");
// for(let i = 0; i<=10; i++){
//     function print(){
//         setTimeout(() => {
//             console.log(i);
//         }, 2000 * i);
//     }
//     print();
// }

// console.log("End");

/*----------------------------------------------*/

// const arr = [1, 2, 3]
// arr[4] = 5

// console.log(arr.length);
// console.log(arr);

/*------------------------------------------------------*/

//destructuring
// const [a, b] = [10, "hii"];
// console.log(a, b);

//If we want value 40, 50, how will you destructure that
const [, , , a, b] = [10, 20, 30, 40, 50];
console.log(a, b);

//What if we have 40 elemnts in array, and we have to get 35th so for this what we have to use
const { 3 : x} = [10, 20, 30, 40, 50];
console.log(x);
//Note-->here we tell what index we have to destructure

/*------------------------------------------------------*/

// function abc(){
//     console.log("hiii");
// }

// const value = new abc();
// console.log(value);
//whenever we call new keyword, an object is created. So here an empty object is created.
//Question asked:- what kind of function is new keyword?
//My answer----> constructor function

//Why do we use constructor function?
//---->Constructor functions in JavaScript are used to create multiple instances of objects with similar properties and methods. They serve as blueprints for creating new objects of the same type.

/*------------------------------------------------------*/


//Factory Function-->another way to create an object

function myFun(name){
    const obj = {name};
    // obj.name = name;
    return obj;
}

const val = myFun("Angel");
console.log(val);

