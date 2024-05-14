//-----Rest parameters-------

// function app(a, b, ...c){
//     console.log(`a is ${a}`);
//     console.log(`b is ${b}`);
//     console.log(`c is ${c}`);
// }

// app(3, 5, 6, 4, 7);


// function addAll(...numbers){
//     let total = 0;
//     for(let number of numbers){
//         total += number;
//     }
//     return total;
// }

// const res = addAll(2, 5, 8);
// console.log(res);


//--------------------Parameter destructuring-----------------

const person = {
    firstName : "Anu",
    age: 20
}

// function printDetails(obj){
//     console.log(obj.firstName);
//     console.log(obj.age);
// }
// printDetails(person);

function printDetails(firstName, age){//destructuring
    console.log(firstName);
    console.log(age);
}
printDetails(person);




