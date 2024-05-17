//-----------async/await--------------->

console.log("script starts");
const URL = "https://jsonplaceholder.typicode.com/posts";


//this function always return promises because of async
//await---> waits until it resolved
async function getPost(){
    const response = await fetch(URL);
    if(!response.ok){
        throw new Error("Somenthing went wrong!")
    }
    const data = await response.json();
    return data;
    // console.log(data);
    // console.log(response);
}

// const myData = getPost();
// console.log(myData);

getPost()
.then(myData => {
    console.log(myData);
})
.catch(error => {
    console.log("Inside catch.")
    console.log(error);
})

console.log("script ends");




