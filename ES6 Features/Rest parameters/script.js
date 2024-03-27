/*---------------------Rest parameters----------------*/
//It basically collects all the value and put it in arrray whereas spread operator spreads the value from any array, strings, etc

const nums = [1, 2, 3, 4]

// function add(...num){
//     console.log(num);
//     let sum = 0
//     for(let i=0; i<num.length; i++){
//         sum += num[i]
//     }
//     return sum
// }

// function add(a, b, c, ...num){ //rest parameter always used at the last formal parameter.
//     console.log(a, b, c);
//     console.log(num);
//     // let sum = 0
//     // for(let i=0; i<num.length; i++){
//     //     sum += num[i]
//     // }
//     // return sum
// }

// // const res = add(...nums, 8, 90)
// const res = add(8, 90)

// function add(){
//     return [...arguments].reduce((acc, curr) => acc + curr)
// }
// function add(){
//     return Array.from(arguments).reduce((acc, curr) => acc + curr)
// }

function add(...num){
    return num.reduce((acc, curr) => acc + curr)
}

const result = add(...nums)