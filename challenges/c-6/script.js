//Task: Create a counter project which increases to 10 when clicked on start button and then stop and 
//if we refresh it will back to 0.

let btn = document.querySelector('.btn')
let time = document.querySelector('.time')

let click = true
let count = 0

btn.addEventListener("click", () => {
    if(click === true){
        let intervalId = setInterval(() => {
            count++;
            time.innerHTML = count
            console.log(count);
            if(count === 10){
                clearInterval(intervalId)
                btn.disabled = true; // Disable the button when count reaches 10
            }
        }, 200)
    }
})