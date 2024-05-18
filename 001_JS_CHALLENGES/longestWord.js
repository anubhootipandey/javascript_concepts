function findLongestWord(str){
    let words = str.split(" ");
    let longestWord = " ";

    //for of loop
    for(let word of words){
        if(word.length > longestWord.length){
            longestWord = word;
        }
    }
    return longestWord;
}

const res = findLongestWord("Reema is Beautiful .");
console.log(res);
