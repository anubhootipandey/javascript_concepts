/*----------------------------some function-----------------------------------
The Array.some() method is used to check whether at least one of the elements of the array satisfies the given 
condition or not.
The  some() method will return true if any predicate is true.
This method does not execute the function for empty array elements.
This method does not change the original array.
*/

const evenNumbers = [0, 2, 4, 6, 8, 5, 7]

// evenNumbers.some((num, i, array) => {
//     console.log(num, i, array);
// })

// console.log(evenNumbers.some((num) => {
//     return 'Anubhooti'
// }))

// const result = evenNumbers.some((num) => {
//     return num % 2 === 1
// })

const result = evenNumbers.some((num, i) => {
    if(num % 2 === 1){
        console.log(i)
    }
    return num % 2 === 1
})

/*---------------------------every function-----------------------------------------
The Array.every() method is used to check whether all the elements of the array satisfy the given condition or not.
The every() method will return true if all predicates are true.
This method executes a function for each array element.
This method does not execute the function for empty elements.
This method does not change the original array
*/

const result1 = evenNumbers.every((num) => {
    return num % 2 === 1
})