//Array---->
const colors = ['red', 'orange', 'brown', 'black', 'pink']

// const clr = colors[1]
// const clr1 = colors[2]
// const clr2 = colors[3]

/*------------Destructuring----------------*/
const [clr, b, d] = colors

/*when we need only one value from the array
const [,,,,clr3] = colors
*/
const {3: clr4} = colors

//Objects--->
const person = {
    name : 'Tanu',
    age : 18,
    address : {
        city : 'Bangalore',
        state : 'Karnataka',
    },
}

// const age = person.age
// const name = person.name

//-------Destructuring
const { name, age } = person
//const { name  : username, age } = person

/*-----multilevel destructuring-----
const {address: {city}} = person
it can be also written as:-
const {address} = person
const {city} = address
*/


/*-----destrcturing in function-------*/
// function intro(userObj){
//     console.log(userObj)
// }

// intro(person)

function intro({age, name}){
    console.log(age, name);
}

intro(person)

// function printClr(colorsArray){
//     console.log(colorsArray)
// }
// printClr(colors)

function printClr([a, b,, d]){
    console.log(a, b, d)
}
printClr(colors)