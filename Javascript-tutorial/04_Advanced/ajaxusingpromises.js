
const URL = "https://jsonplaceholder.typicode.com/posts";


function sendRequest(method, url){
    return new Promise(function(res, rej){
        const xhr = new XMLHttpRequest();
        xhr.open(method, url);
        xhr.onload = function(){
            if(xhr.status >= 200 && xhr.status < 300){
                res(xhr.response);
            } else{
                rej(new Error("Something went wrong!"))
            }
        }

        xhr.onerror = function(){
            rej(new Error("network error!"))
        }

        xhr.send();
    })
}

sendRequest("GET", URL)
.then(response => {
    const data = JSON.parse(response);
    // console.log(data);
    return data;
})
.then(data => {
    const id = data[3].id;
    return id;
})
.then(id => {
    // console.log(id);
    const url = `${URL}/${id}`;
    return sendRequest("GET", url);
    // console.log(url);
})
.then(newResponse => {
    const newData = JSON.parse(newResponse);
    console.log(newData);
})
.catch(error => console.log(error))



