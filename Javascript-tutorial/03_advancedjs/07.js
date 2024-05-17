//--------promises && setTimeOut--------------->


function myPromise(){
    return new Promise((res, rej) => {
        const value = false;
        setTimeout(() => {
            if(value){
                res();
            } else{
                rej();
            }
        }, 2000)
    })
}

myPromise().then(() => {
    console.log("resolved");
}).catch(() => {
    console.log("rejected");
})

