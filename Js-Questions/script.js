//Program to find longest word in a given sentence

function findLongestWord(sentence) {
    // Split the sentence into an array of words
    const words = sentence.split(" ");
    // Initialize a variable to store the length of the longest word
    let maxLength = 0;
    // Initialize a variable to store the longest word
    let longestWord = "";
    // Loop through each word in the array
    for (let i = 0; i < words.length; i++) {
      // If the length of the current word is greater than the current maxLength
      if (words[i].length > maxLength) {
        // Update the maxLength
        maxLength = words[i].length;
        // Update the longestWord
        longestWord = words[i];
      }
    }
    // Return the longest word found
    return longestWord;
  }
  
  // Example usage
  const sentence = "This is a simple example sentence to test the program";
  const longest = findLongestWord(sentence);
  console.log("Longest word:", longest);
  

