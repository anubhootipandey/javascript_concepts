//new keyword

// function createUser(firstName, age){
//     this.firstName = firstName;
//     this.age = age;
// }

// createUser.prototype.about = function(){
//     console.log(this.firstName, this.age);
// }

// const user1 = new createUser("Anu", 20);

// //new keyword
// //--empty object this = []
// //--return this
// //Object.create(createUser.prototype);

// user1.about();


//----------------------------------------------------------------

// let numbers = [1, 2, 3]
// console.log(Object.getPrototypeOf(numbers));
// console.log(numbers);

function hello(){
    console.log("hello");
}

console.log(hello.prototype);
hello.prototype = [];
console.log(hello.prototype);
hello.prototype.push('1');



