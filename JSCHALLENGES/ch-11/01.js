function generateRandomCaptcha(){
    const chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    let captchaLength = 7;
    let result = '';

    for(let i=0; i<captchaLength; i++){
        let randomNum = Math.floor(Math.random() * chars.length);

        result += chars.substring(randomNum, randomNum + 1);
    }

    document.getElementById('randomChar').innerHTML = result;
}