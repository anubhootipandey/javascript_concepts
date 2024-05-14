//-------------------------------Maps----------------------
//map is an iterable 

//store data in ordered way

//store key value pair like an object
//duplicate keys are not allowed like objects

//difference between maps and objects

//objects can onlu have string or symbol as key

//in maps you can use anything as key like array, number, string

//object literals
// const person = {
//     firstName: "Tanu",
//     age: 19,
//     1: "one"
// }

// console.log(person.firstName, person.age);

// for(let key in person){
//     console.log(typeof key);
// }


//map
// const person = new Map();
// person.set('firstName', 'Anubhooti');
// person.set('age', 20);
// person.set(1, 'one');
// console.log(person);
// console.log(person.get('age'));
// console.log(person.keys());

// for(let key of person.keys()){
//     console.log(key, typeof key);
// }

// for(let [key, value] of person){
//     // console.log(Array.isArray(key));
//     console.log(key, value);
// }

// const person = new Map([['firstName', 'Anu'], ['age', 20]])
// console.log(person);

const user = {
    id: 1,
    firstName: "Nidhi"
}

const userInfo = new Map()
userInfo.set(user, {age: 27, gender: "female"})
// console.log(userInfo);
console.log(user.id);
console.log(userInfo.get(user).gender);


