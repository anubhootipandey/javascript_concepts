//-------Array Methods--------
/*
forEach
map
filter
reduce
*/

// const numbers = [2, 5, 8, 9, 5];

// // function mulByTwo(num, index){
// //     console.log("index is", index);
// //     // console.log(num * 2);
// //     console.log(`${num}*2 = ${num * 2}`);
// // }

// // mulByTwo(numbers[0], 0);
// // mulByTwo(numbers[1], 1);

// // for(let i=0; i<numbers.length; i++){
// //     // console.log(i);
// //     mulByTwo(numbers[i], i);
// // }


// //-----------------------forEach------------------------

// // function myFun(num, index){
// //     console.log(`index is ${index} number is ${num}`);
// // }

// // numbers.forEach(myFun);


// // numbers.forEach(function(num, index){
// //     console.log(`index is ${index} number is ${num}`);
// // });

// // numbers.forEach(function(num){
// //     console.log(`${num}*2 = ${num * 2}`);
// // })


// const users = [
//     {
//         firstName: "Anu",
//         age: 20
//     },
//     {
//         firstName: "Tanu",
//         age: 19
//     },
//     {
//         firstName: "Satyabrat",
//         age: 15
//     },
//     {
//         firstName: "Nidhi",
//         age: 27
//     },
// ]

// users.forEach(function(user){
//     console.log(user.firstName, user.age);
// })

// users.forEach((user, index) => console.log(user.firstName, index)
// );

//------------------------------------------------------------------------------
//--------------------------------------Map----------------------------------

// const numbers = [2, 4, 7, 8, 4, 6, 9]

// const square = function(num){
//     return num * num;
// }

// const sqNum = numbers.map(square);
// console.log(sqNum);

//if the function is not returning anything then it will return undefined automatically

// const users = [
//     {
//         firstName: "Anu",
//         age: 20
//     },
//     {
//         firstName: "Tanu",
//         age: 19
//     },
//     {
//         firstName: "Satyabrat",
//         age: 15
//     },
//     {
//         firstName: "Nidhi",
//         age: 27
//     },
// ]

// const userNames = users.map((user) => {
//     return user.firstName;
// })
// console.log(userNames);


//------------------------------------------------------------------------------
//--------------------------------------Filter----------------------------------


// const numbers = [1, 2, 3, 44, 55, 67, 84]

// const isEven = (num) => {
//     return num%2===0;
// }

// const evenNum = numbers.filter(isEven)
// console.log(evenNum);


//------------------------------------------------------------------------------
//--------------------------------------Reduce----------------------------------

//task: sum of all the numbers in array
const numbers = [2, 4, 5, 7, 6]

const sum = numbers.reduce((accumulator, currentVal) => {
    return accumulator + currentVal;
});
console.log(sum);

//accumulator  currentVal    return
//  2             4             6
//  6             5             11
//  11            7             18
//  18            6             24

