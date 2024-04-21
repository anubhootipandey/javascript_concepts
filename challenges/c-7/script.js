//Task1: Output

const numbers = [0, 1, 2, 3, 4, 5]
numbers.push(6)
console.log(numbers);

//Task2: capitalize the first letter of each word

const str = "hi i am anubhooti"

const words = str.split(" ");

const mapArr = words.map((word) => {
    return word[0].toUpperCase() + word.substring(1);
}).join(" ")

console.log(mapArr);
