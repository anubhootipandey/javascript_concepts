// function kuchbhi() {
// };
// console.log(typeof(kuchbhi));

//typeof function is function

// class myClass{
// }
// console.log(typeof myClass);

//typeof class is function

/************************************************************************************************************************************* */
// const myPromise = new Promise((res, rej) => {
//     document.getElementById("btn").addEventListener("click", () => {
//         // console.log(Promise.resolve("myPromise"));
//         res("myValue");
//     });
//     document.getElementById("btn1").addEventListener("click", () => {
//         // console.log(Promise.resolve("myPromise"));
//         rej("kuch bhi");
//     });
// });
// myPromise.then(res => console.log(res))
// .catch(err => console.log(err));

/******************************************************************************************************************************** */
//make a promise which is resolved
// async function myFun(){
//     return "Anubhooti";
// }
// const res = myFun();
// console.log(res);

/*************************************************************************************************************************** */
//make a promise which is pending
// async function kuchBhi(){
//     return "Anubhooti Pandey";
// }

// const pending = kuchBhi().then(res => console.log(res)).catch(err => console.log(err));
// console.log(pending); 

/********or*****/
async function myFun(){
    const res = await Promise;
    return "anu";
}
console.log(myFun());

/********************************************************************************************************************************** */
//make a promise which is rejected
// async function someFun(){
//     throw new error;
// }
// console.log(someFun());


/************************************************************************************************************************************* */
