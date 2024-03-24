const animals = ['tiger', 'lion', 'dog', 'cat', 'elephant']

// animals.forEach(function() {
//     console.log("hello world")
// })

//anonymous or callback or arrow function
animals.forEach( (a) => { //forEach is a higher order function it means because we have called a function inside this function.if we call any function inside any function then in the function where we have called another function is called as higher order fumction.
    console.log(a)
})

//if we run the above function in console of the browser then it also returns the undefined keyword because it is default value of forEach.
