/*---------------------Rest parameters----------------*/
//It basically collects all the value and put it in arrray whereas spread operator spreads the value from any array, strings, etc

const nums = [1, 2, 3, 4]

function add(...num){
    console.log(num);
    let sum = 0
    for(let i=0; i<num.length; i++){
        sum += num[i]
    }
    return sum
}