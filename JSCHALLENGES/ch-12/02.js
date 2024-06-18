//Find items that exist only once in an Array

const arr = [1, 2, 3, 4, 5, 3, 2];

//My answer:-
const result = arr.filter((v) => {
    return arr.indexOf(v) === arr.lastIndexOf(v);
})

console.log(result);

//Output--[1, 4, 5]

