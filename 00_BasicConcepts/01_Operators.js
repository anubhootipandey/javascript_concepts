//--------------------------------Operstors--------------------------

//Operators are special symbols in JavaScript that let you perform operations on values.

// -->Types of Operators

// 1--> Arithmetic Operators
let addition = 5 + 3;
let subtraction = 5 - 3;
let multiplication = 5 * 3;
let division = 15 / 3;
let modulus = 7 % 3;

// 2--> Comparison Operators
let isEqual = (5 == 5);
let isNotEqual = (5 != 3);
let isGreater = (5 > 3);
let isSmaller = (5 < 3);
let isGreaterOrEqual = (5 >= 5);
let isSmallerOrEqual = (5 <= 3);

// 3--> Logical Operators
let isBothTrue = (5 > 3 && 2 < 4); //AND
let isOneTrue = (5 > 3 || 2 > 4); //OR
let isNotTrue = !(5 > 3); //Not

// 4--> Assignment Operators
//equal
let a = 5; 
// ADD and Assign
let x = 5;
x += 3;
//Subtract and assign
let c = 5;
c -= 3; 
// Multiply and assign
let y = 5;
y *= 3;
// Divide and assign
let b = 15;
b /= 3;

// 5--> Bitwise Operators
// AND (&)
let bitwiseAnd = (5 & 1); // 1
// OR (|)
let bitwiseOr = (5 | 1); // 5
// NOT (~)
let bitwiseNot = (~5); // -6
// XOR (^)
let bitwiseXor = (5 ^ 1); // 4
// Left shift (<<)
let leftShift = (5 << 1); // 10
// Right shift (>>)
let rightShift = (5 >> 1); // 2
// Unsigned right shift (>>>)
let unsignedRightShift = (5 >>> 1); // 2

// 6-->Other Operators
// Conditional (ternary) operator (condition ? expr1 : expr2)
let age = 18;
let message = (age >= 18) ? 'You are an adult.' : 'You are a minor.';

// Comma operator (,)
let j = 1;
let k = 2;
let result = (j++, k++); // result is 2 (evaluates to the last operand)

// Unary plus (+)
let w = '5';
let answer = +w; // result is 5 (string converted to number)

// Unary negation (-)
let g = '5';
let res = -g; // result is -5 (string converted to number and negated)

// Increment (++)
let p = 5;
p++; // p is now 6

// Decrement (--)
let l = 5;
l--; // l is now 4

// Typeof (typeof)
let d = 5;
let ans = typeof d; // result is 'number'

// Delete (delete)
let obj = { prop: 5 };
delete obj.prop; // obj is now {}

// Void (void)
void function() {
    console.log('This will be undefined');
}();


