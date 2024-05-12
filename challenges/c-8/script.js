//Task: Make a digital clock

const hoursEl = document.getElementById("hours");
const minutesEl = document.getElementById("minutes");
const secondsEl = document.getElementById("seconds");
const am_pmEl = document.getElementById("am/pm");

// console.log(date.getHours());
// console.log(date.getMinutes());
// console.log(date.getSeconds());

const date = new Date();
console.log(date);

function digitalClock(){
    const date = new Date();

    const hours = date.getHours();
    // const minutes = date.getMinutes();
    // const seconds = date.getSeconds();


    hoursEl.innerText = date.getHours();
    minutesEl.innerText = date.getMinutes();
    secondsEl.innerText = date.getSeconds();

    am_pmEl.innerText = hours >= 12 ? "PM" : "AM";
    
    requestAnimationFrame(digitalClock);
}
requestAnimationFrame(digitalClock);

