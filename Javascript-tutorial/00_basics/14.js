//------------find method---------------

// const myArr = ["hello", "hiii", "cat", "dog"]
// const ans = myArr.find((string) => string.length === 3)
// console.log(ans);//cat--> it wil print first occurrence which has length of 3

// const users = [
//     {
//         userId: 1,
//         userName: "Anu"
//     },
//     {
//         userId: 2,
//         userName: "Tanu"
//     },
//     {
//         userId: 3,
//         userName: "Satyabrat"
//     },
//     {
//         userId: 4,
//         userName: "Nidhi"
//     },
// ]
// const res = users.find((user) => user.userId === 4)
// console.log(res);


//-------------------every method--------------------------

// const numbers = [2, 4, 7, 8, 4, 34]

// const res = numbers.every((number) => number%2===0)
// console.log(res);

//callback function----->true / false
//every method---> true/ false

// const products = [
//     {
//         productId: 1,
//         productName: "p1",
//         price: 3009
//     },
//     {
//         productId: 2,
//         productName: "p2",
//         price: 4900
//     },
//     {
//         productId: 3,
//         productName: "p3",
//         price: 3000
//     },
//     {
//         productId: 4,
//         productName: "p4",
//         price: 400
//     },
//     {
//         productId: 5,
//         productName: "p5",
//         price: 300
//     }
// ]

// const res = products.every((product) => product.price < 5000)
// console.log(res);



//-------------------------------some method--------------------------

// const numbers = [3, 5, 89, 9];

// const ans = numbers.some((number) => number%2===0)
// console.log(ans);

// const products = [
//     {
//         productId: 1,
//         productName: "p1",
//         price: 3009
//     },
//     {
//         productId: 2,
//         productName: "p2",
//         price: 4900
//     },
//     {
//         productId: 3,
//         productName: "p3",
//         price: 3000
//     },
//     {
//         productId: 4,
//         productName: "p4",
//         price: 400
//     },
//     {
//         productId: 5,
//         productName: "p5",
//         price: 300
//     }
// ]
// const ans = products.some((product) => product.price > 5000)
// console.log(ans);


//--------------------------------fill method-----------------------
//value, start, end

// const myArr = new Array(10).fill(-1);
// console.log(myArr);

// const ourArr = [1, 2, 3, 4, 5, 8]
// ourArr.fill(0, 2, 4);
// console.log(ourArr);


//------------------------------splice method-----------------------
//start, delete, insert

const myArr = ['item1', 'item2', 'item3'];

//delete
myArr.splice(1, 1)
console.log(myArr);

//insert
myArr.splice(1, 2, 'inserted item')
console.log(myArr);


