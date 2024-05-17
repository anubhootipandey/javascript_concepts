// callbacks, callback hell, pyramid of dom
//asynchronous programming

const heading1 = document.querySelector(".heading1");
const heading2 = document.querySelector(".heading2");
const heading3 = document.querySelector(".heading3");
const heading4 = document.querySelector(".heading4");
const heading5 = document.querySelector(".heading5");
const heading6 = document.querySelector(".heading6");
const heading7 = document.querySelector(".heading7");


//----callback hell------------>
// setTimeout(() => {
//     heading1.textContent = "Heading 1!";
//     heading1.style.color = "violet";
//     setTimeout(() => {
//         heading2.textContent = "Heading 2!";
//         heading2.style.color = "purple";
//         setTimeout(() => {
//             heading3.textContent = "Heading 3!";
//             heading3.style.color = "red";
//             setTimeout(() => {
//                 heading4.textContent = "Heading 4!";
//                 heading4.style.color = "red";
//                 setTimeout(() => {
//                     heading5.textContent = "Heading 5!";
//                     heading5.style.color = "red";
//                     setTimeout(() => {
//                         heading6.textContent = "Heading 6!";
//                         heading6.style.color = "red";
//                         setTimeout(() => {
//                             heading7.textContent = "Heading 7!";
//                             heading7.style.color = "red";
//                         }, 1000);
//                     }, 3000);
//                 }, 2000);
//             }, 1000);
//         }, 2000);
//     }, 2000);
// }, 1000);


//using function
function changeText(element, text, color, time, onSuccessCallback, onFailureCallback){
    setTimeout(() => {
        if(element){
            element.textContent = text;
            element.style.color = color;
            if(onSuccessCallback){
                onSuccessCallback();
            }
        } else{
            if(onFailureCallback){
                onFailureCallback();
            }
        }
    }, time)
}


//-------------pyramid of dom-------------------->
changeText(heading1, "one", "violet", 1000, () => {
    changeText(heading2, "two", "purple", 2000, () => {
        changeText(heading3, "three", "red", 2000, () => {
            changeText(heading4, "four", "green", 3000, () => {
                changeText(heading5, "five", "orange", 3000, () => {
                    changeText(heading6, "six", "pink", 4000, () => {
                        changeText(heading7, "seven", "blue", 4000, () => {

                        }, () => {console.log("Heading7 does not exist!")});
                    }, () => {console.log("Heading6 does not exist!")});
                }, () => {console.log("Heading5 does not exist!")});
            }, () => {console.log("Heading4 does not exist!")});
        }, () => {console.log("Heading3 does not exist!")});
    }, () => {console.log("Heading2 does not exist!")});
}, () => {console.log("Heading1 does not exist!")});









