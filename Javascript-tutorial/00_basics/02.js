//for loop in array

// let fruits = ['apple', 'mango', 'grapes'];

// console.log(fruits.length);
// console.log(fruits[fruits.length - 3]);

// for(let i=0; i<=fruits.length-2; i++){
//     console.log(i);
//     console.log(fruits[i].toUpperCase());
// }


// let fruits2 = [];
// for(let i=0; i<fruits.length; i++){
//     fruits2.push(fruits[i].toUpperCase());
// }

// console.log(fruits2);

/*--------------------------------------------------------------*/

//use const for creating arrray

// const animal = ['cat', 'dog', 'fox', 'tiger'];
// const animal2 = [];
// animal.push('lion');
// console.log(animal);

// //while loop in array
// let i = 0;
// while(i<animal.length){
//     animal2.push(animal[i].toUpperCase());
//     i++;
// }
// console.log(animal2);

/*--------------------------------------------------------------*/

//for of loop in array

const cars = ['car1', 'car2', 'car3'];

for(let car of cars){
    console.log(car);
}

//for in loop

const pens = ['pen1', 'pen2'];
const pen2 = []

for(let i in pens){
    console.log(i);
}
