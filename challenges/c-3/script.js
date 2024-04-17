const numbers = [0, 1, 2, 3, 4, 5]

//Task1: filter out the number which is less than 3
let result = numbers.filter((number) => {
    return number < 3;
});
console.log(result)


//Task2: Using map, convert all the numbers into string
let res = numbers.map((number) => {
    return number.toString()
})

console.log(res);