//----synchronous vs asynchronous programming

//-------synchronous programming---------->
// console.log("script start");

// for(let i=1; i<10000; i++){
//     console.log("inside for loop");
// }

// console.log("script end");


//-------------------setTimeOut()--------------->
//---------asynchronous------>
console.log("script start");

// function hello(){
//     console.log("hello world!!");
// }
// setTimeout(hello, 1000);
const id = setTimeout(() => {
    console.log("inside setTimeOut");
}, 1000);

for(let i=1; i<100; i++){
    console.log("...random...");
}
console.log("setTimeOut id is", id);
console.log("clearing time out");
clearTimeout(id)
console.log("script end");






