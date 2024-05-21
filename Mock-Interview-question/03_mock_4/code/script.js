let arr = [0, 1, 2, 3, 4, 5];

// const ans = arr.filter((num) => {
//     return num < 3;
// })
const ans = arr
                .filter(num => num < 3)
                .map(num => num * 2)
                .reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(ans);