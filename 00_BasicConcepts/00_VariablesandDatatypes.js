//----------------Variables and Datatypes------------------

//----------------------Variables--> used to store data.

// 1--Declare Variables

// a--let: Used to declare a variable that can be reassigned later.
let age = 32;
age = 26; //Reassigning

// b--const: Used to declare a constant variable that cannot be reassigned.
const birthYear = 1998;
// birthYear = 1999; // This would cause an error

// c--var: An older way to declare variables, generally replaced by let and const in modern JavaScript.
var name = "Marie";
name = "Curie"; // Reassigning

/*-------------------------------------------------------------------------------------------------------------------------*/

//------------------Datatypes--> describe the kind of data a variable can hold.

// 1--> String- a sequence of characters, used for text.
let stringExample = "Hello, World!";

// 2--> Number-  Numeric values, can be integers or floating-point numbers.
let numberAge = 45;

// 3--> Boolean- Represents true or false.
let isLoggedIn = true;
let isAdmin = false;

// 4--> Array- A collection of items, which can be of any datatype.
let fruits = ['mango', 'banana', 'grapes'];
let mixedArr = ['mango', 45, 78, 'grapes'];

// 5--> Object- A collection of key-value pairs, useful for storing related data.
let user = {
    name: "Marie",
    age: 25,
    isUser: false
}

// 5--> Null- Represents the intentional absence of any object value.
let emptyValue = null;

// 6--> Undefined- Indicates a variable that has been declared but not assigned a value.
let unknown;
// unknown is undefined

// 7--> Symbol- A unique and immutable value often used to identify object properties.
let symbol = Symbol("unique");

