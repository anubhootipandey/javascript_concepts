//------------sort method------------------------

// const numbers = [67, 1200, 400, 89, 45, 3, 98, 3, 4, 1]

// // numbers.sort((a, b) => a - b);
// numbers.sort((a, b) => b - a);
// console.log(numbers);


// const userName = ['tanu', 'sattu', 'anu', 'nidhi']

// userName.sort()
// console.log(userName);

//a - b-->positive(greater than 0)---< b, a
//a - b-->negative---->a, b

//--------------Example----------------

const products = [
    {
        productId: 1,
        productName: "p1",
        price: 3009
    },
    {
        productId: 2,
        productName: "p2",
        price: 4900
    },
    {
        productId: 3,
        productName: "p3",
        price: 3000
    },
    {
        productId: 4,
        productName: "p4",
        price: 400
    },
    {
        productId: 5,
        productName: "p5",
        price: 300
    }
]

//lowToHigh

// products.sort((a, b) => a.price - navigator.price);
// console.log(products);
const lowToHigh = products.slice(0).sort((a, b) => a.price - b.price);
// console.log(products);
console.log(lowToHigh);

const highToLow = products.slice(0).sort((a, b) => b.price - a.price);
console.log(highToLow);





