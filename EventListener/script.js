const h1 = document.querySelector('h1')
const cards = document.querySelector('.card')
const container = document.querySelector('.container')

// function hello(){
//     console.log("Hello Javascript")
// }

// //h1.onclick = hello
// h1.addEventListener('click', hello)

// function myFunc(){
//     console.log("This card is clicked!")
// }

// cards.addEventListener('click', myFunc)

// cards.addEventListener('click', () => {
//     console.log("card clicked");
// })

let count = 1

cards.addEventListener('click', () => {
    const newCard = document.createElement('div')
    newCard.classList.add('card')
    newCard.innerText = count
    count++
    container.append(newCard)
    //console.log(newCard);
})
