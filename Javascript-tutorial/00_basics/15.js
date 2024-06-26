//------------------------iterables--------------------------
//array and strings are iterable means we can use for of loop in these

// //string
// const firstName = "Anu";
// for(let char of firstName){
//     console.log(char);
// }

// //array
// const items = [1, 2, 3, 4]
// for(let item of items){
//     console.log(item);
// }

// //objects
// const users = {'key1': 'value1', 'key2' : 'value2'}
// for(let user of users){
//     console.log(user);
// }

/*-----Why objects are not iterable?

 --objects aren't directly iterable because they don't have a 
 built-in, clear order like arrays do. But with the help of 
 methods like Object.keys(), Object.values(), or 
 Object.entries(), we can still work with the contents of 
 objects in an iterable way.
 */

//--------------array like object----------------
//--those who have length property and their index can be accessed
//--example-string

// const firstName = 'Satyabrat'
// console.log(firstName.length);
// console.log(firstName[6]);


//---------------------------------------SETs------------------------------------
//set is iterable that store data
//it also have its own methods
//no index-based access
//order is not guranteed
//unique items only (no duplicates allowed)

// const numbers = new Set([3, 1, 2, 3, 2]);
// console.log(numbers);

// const numbers = new Set();
// numbers.add(1);
// numbers.add("item1")
// numbers.add(["item1", 2])
// numbers.add(["item1", 2])

// if(numbers.has(1)){
//     console.log("1 is present.");
// }else{
//     console.log("1 is not present!");
// }
// console.log(numbers);

// const numbers = new Set();
// numbers.add(1);
// numbers.add(2);
// numbers.add(4);
// numbers.add(5);
// numbers.add(3);
// numbers.add(17);

// for(let number of numbers){
//     console.log(number);
// }


//-------------------------Example-----------------------

const myArr = [1, 2, 3, 3, 5, 6, 1]
const uniqueElements = new Set(myArr);
console.log(uniqueElements);

//Task: find the length of the set

let length = 0
for(let element of uniqueElements){
    length++;
}
console.log(length);

