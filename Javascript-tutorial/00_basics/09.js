//--------block scope vs function scope

//let and const are block scope
//var is function scope

// {
//     let firstName = "Anu";
// }
// // console.log(firstName);// ReferenceError: firstName is not defined

// {
//     let firstName = "Tanu";
//     console.log(firstName);
// }

// const firstName = "Nidhi";
// console.log(firstName);


//----------var------>functionally scoped

// {
//     var firstName = "Satyabrat";
// }
// console.log(firstName);

// {
//     console.log(firstName);
// }


//-------------Example-------

// if(true){
//     var firstName = "Anu";
//     console.log(firstName);
// }
// console.log(firstName);


function app(){
    if(true){
        let firstName = "Anu";
        console.log(firstName);
    }
    console.log(firstName);
}

app();


