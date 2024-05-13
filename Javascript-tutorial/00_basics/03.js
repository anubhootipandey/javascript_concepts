//how to create objects

// const person = {
//     name: 'Anu',
//     age: 20,
//     hobbies: ['sleep', 'eat', 'code', 'repeat']
// }
// console.log( person);

// //how to acces data from objects
// console.log(person.age);
// // console.log(person["age"]);
// console.log(person.name);
// console.log(person.hobbies[3]);

// //how to add key value pair to objects
// // person.gender = "female";
// // console.log(person);

// person["gender"] = "female";
// console.log(person);


//difference between dot and bracket notation

const person = {
    name: 'Anu',
    age: 20,
    "person hobbies": ['sleep', 'eat', 'code', 'repeat'],
}

// // console.log(person.person hobbies);--->here it doesn't work because it has spacing which can cause error.
// console.log(person["person hobbies"]);

//The main difference is whenever we have to console the person data in which key has space naming, in this case the dot gives error and bracket gives the output.

//how to iterate object

//1---for in loop
// for(let key in person){
//     console.log(person[key]);
// }

// for(let key in person){
//     console.log(`${key}: ${person[key]}`);
// }

// for(let key in person){
//     console.log(key, ":",  person[key]);
// }


//2--Object.keys
// console.log(Object.keys(person));

//3--for of
for(let key of Object.keys(person)){
    console.log(person[key]);
}

