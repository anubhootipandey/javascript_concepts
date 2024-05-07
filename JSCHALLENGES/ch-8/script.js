// function increaseCounter(){
//     var countEl = document.getElementById("count");
//     var count = parseInt(countEl.textContent);
//     count++;
//     countEl.textContent = count;
// }

// //Task: Create a refresh button functionality

var count = 0;

function increaseCounter() {
    count++;
    document.getElementById("count").textContent = count;
}

function refreshCounter() {
    count = 0;
    document.getElementById("count").textContent = count;
}

function decreaseCounter(){
    if(count > 0){
        count--;
    document.getElementById("count").textContent = count;
    var decreaseButton = document.getElementById("decrease");
    decreaseButton.disabled = count === 0;
    }
}