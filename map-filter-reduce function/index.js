/*----------------reduce method-----------------*/

const nums = [1, 2, 4, 6, 3, 5]

nums.reduce((accumulator, current, i) => {
    // console.log(i, current)
    // console.log(accumulator)
    // return current
    console.log(accumulator, current)
    return accumulator + current
}, 0)