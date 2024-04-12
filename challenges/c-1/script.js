const firstBasket = document.querySelector('.basket-1 span')
const secondBasket = document.querySelector('.basket-2 span')

const lefttArr = document.querySelector('.left-arrow')
const rightArr = document.querySelector('.right-arrow')

let totalApples = 10

let secondBasketAppleCount = 0
let firstBasketAppleCount = totalApples - secondBasketAppleCount

firstBasket.innerText = firstBasketAppleCount
secondBasket.innerText = secondBasketAppleCount

rightArr.addEventListener('click', () => {
    firstBasketAppleCount--;
    firstBasket.innerText = firstBasketAppleCount
    secondBasketAppleCount++;
    secondBasket.innerText = secondBasketAppleCount
})