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
