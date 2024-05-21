//Find largest prime number in an Array

const arr = [4, 5, 7, 8, 9, 11, 12, 17, 97, 47];

//My answer

function isPrime(num){
    if(num % 2 == 0 || num < 2) return false;

    for(let i = 3; i<=Math.sqrt(num); i+=2){
        if(num % i == 0) return false;
    }
    return true;
}

const largestPrimeNum = arr.sort((a, b) => a - b).findLast(isPrime);
console.log(largestPrimeNum);
