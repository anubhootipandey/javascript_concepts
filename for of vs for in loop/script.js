// // 'use strict'-->With strict mode, you can not, for example, use undeclared variables.

// const animals = ['tiger', 'lion', 'dog', 'cat', 'elephant']

// // for(let i=0; i<animals.length; i++){
// //     console.log(i)
// // }

/*-------------------for of loop------------------*/
// for(const animal of animals){ //JavaScript for...of loop is used to iterate over iterable objects such as arrays, strings, maps, sets, etc. It provides a simpler syntax compared to traditional for loops.
//     console.log(animal)
// }


/*----------------------for in loop--------------------------*/
const person = {
    fName: 'Bill',
    lName: 'Gates',
    age: 50,
    city: 'XYZ',
}

// for(const key in person){ //Use the for-in loop to iterate over non-array objects. Even though we can use a for-in loop for an array, it is generally not recommended. Instead, use a for loop for looping over an array.
//     console.log(person[key])
// }

const personKeys = Object.keys(person)//it only shows the key of the string
const personValues = Object.values(person)//it only shows the value of the string
const personEntries = Object.entries(person)//it shows array of string data

for(const key of personKeys){
    console.log(person[key])
}