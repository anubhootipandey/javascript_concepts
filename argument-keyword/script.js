/*-------------arguments------------*/

// function add() {
//     console.log(arguments[0]);
//     console.log(arguments[1]);
//     console.log(arguments[2]);
// }

// function add() {
//     for(let i=0; i<arguments.length; i++){
//         console.log(arguments[i]);
//     }
// }

function add() {
    let sum = 0;
    for(let i=0; i<arguments.length; i++){
        sum += arguments[i];
    }
    return sum;
}
