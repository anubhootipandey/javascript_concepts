/*------------------------Spread Operator-------------------------*/

//The JavaScript spread operator (...) allows us to quickly copy all or part of an existing array or object into another array or object.

const num1 = [1, 2, 3, 4]
const num2 = [5, 6, 7, 8, 9]

// // const combinedArray = num1.concat(num2);

// const combinedArray = [...num1, ...num2]

// const person = {
//     name : 'Anu',
//     age : 20
// }
// // const updatedPerson = {...person}
// const updatedPerson = {...person, city : 'Lucknow'}

function add(){
    // console.log(arguments);
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        // console.log(arguments[i]);
        sum += arguments[i];
    }
    return sum;
}