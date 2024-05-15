// //__proto__           [[prototype]]

// const obj1 = {
//     key1: "value1",
//     key2: "value2"
// }

// const obj2 = Object.create(obj1);
// // console.log(obj2);
// //there is one more way to create empty object
// obj2.key3 = "value3";
// //obj2.key2 = "unique";
// // console.log(obj2);

// console.log(obj2.__proto__);


//-----------------------------------------------------------

//javascript function ===> function  +  object

// //you can add your own properties
function hello(){
    console.log("hello world!");
}

// hello.myOwnProperty = "very unique value";
// console.log(hello.myOwnProperty);


//-----------------------------------------------------------------
//only function provide prototype

hello.prototype.abc = "abc";
hello.prototype.sing = function(){
    return "tara ra ra ";
}
console.log(hello.prototype.sing());





