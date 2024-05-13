//trim()
//toUpperCase()
//toLowerCase()
//slice

// let myName = "   Anubhooti   ";
// console.log(myName.length);

// let newStr = myName.trim(); //"Anubhooti"
// console.log(newStr.length);

// let myStr = myName.slice(0, 5);//To find specific string or some length of string
// console.log(myStr);

/*-----------------------------------------------------------*/

//Arrays Methods---->

// let fruits = ['mango', 'grapes'];
// console.log(fruits);

// fruits.push("apple");//it adds element at the last index of array
// console.log(fruits);

// let poppedFruit = fruits.pop();//it removes the last index elemnt from the arrray
// console.log(fruits);
// console.log(poppedFruit);

// fruits.unshift("banana");//it adds the element at the first index of array
// console.log(fruits);

// fruits.shift();//it removes the first index element from the array
// console.log(fruits);


/*****NOTE
 Push and pop is faster than shift and unshift because shift and
 unshift has to first shift all the elements at front and then 
 remove or add the elements.
 */

/*-----------------------------------------------------------*/

//************For cloning**********
/*3 ways of cloning array
--> let arr2 = ["item1", "items2"];
--> let arr2 = arr1.slice(0);
--> let arr2 = [].concat(arr1);
*/

/*How to concat cloning array
--> let arr2 = arr1.slice(0).concat(["item3", "item4"]);
--> let arr2 = [].concat(arr1, ["item3", "item4"]);
 */

let arr1 = ["item1", "item2"];
let arr2 = [...arr1];//spread operator

arr1.push("item3");
console.log(arr1 === arr2);
console.log(arr1);
console.log(arr2);













