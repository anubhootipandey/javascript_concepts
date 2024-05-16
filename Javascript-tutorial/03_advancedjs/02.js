//-------setInterval------------>

console.log("script starts");

setInterval(() => {
    let total = 0;
    for(let i=0; i<10000000; i++){
        total += i;
    }
    console.log(total);
    console.log(Math.random());
}, 500);

console.log("script end");




















