const h1 = document.querySelector('h1')
const paragraph = document.querySelector('p')
const allLinks = document.querySelector('a')
h1.style.color = 'blue'
h1.style.backgroundColor = 'skyblue'

for(let i=0; i<allLinks.length; i++){
    allLinks[i].style.color = 'teal'
}