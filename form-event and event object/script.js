const usernameInput = document.querySelector('#username')
const paragraph = document.querySelector('p')

// usernameInput.addEventListener('click', () => {
//     console.log('input clicked')
// })

// usernameInput.addEventListener('dblclick', () => {
//     console.log('input double clicked')
// })

// usernameInput.addEventListener('input', (event) => {
//     console.log('input event')
// })

let inputValue

usernameInput.addEventListener('input', (e) => {
    console.log(e.target.value)
    inputValue = e.target.value
    paragraph.innerText = e.target.value
})

// usernameInput.addEventListener('change', (e) => {
//     console.log(e.target.value)
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })

// usernameInput.addEventListener('focus', (e) => {
//     console.log(e)
//     inputValue = e.target.value
//     paragraph.innerText = e.target.value
// })