
//computed properties

const key1 = 'objKey1';
const key2 = 'objKey2';

const val1 = 'myVal1';
const val2 = 'myVal2';

/*task--->
const obj = {
    objKey1 : "myVal1",
    objKey2 : "myVal2"
}
*/

//Method-1
// const obj = {
//     [key1] : val1,
//     [key2] : val2
// }
// console.log(obj);


//Method-2
const obj = []

obj[key1] = val1;
obj[key2] = val2;
console.log(obj);
