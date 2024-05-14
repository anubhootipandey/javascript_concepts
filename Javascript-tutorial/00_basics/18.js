//-------------------Optional chaining-----------------------

// const user = {
//     firstName: "Nidhi",
//     // address: {houseNumber: '234'}
// }

// console.log(user.firstName);
// console.log(user?.address?.houseNumber);


//----------------------------methods----------------------------
//function inside object

// const person = {
//     firstName: "Anu",
//     age: 45,
//     about: function(){
//         console.log(this);
//         console.log(`The name of the person is ${this.firstName} and age is ${this.age}`);
//     }
// }

// person.about();

/*---------------------------------------------------------*/

// console.log(this);
function app(){
    // "use strict"
    console.log(this);
}
app();








