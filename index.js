function isPalindrome(word) {
 return word;
  }
  

function reverseString(word) {
  return word.split("").reverse().join("");}
  function isPalindrome(word) {
    // reverse the input string
    const reversedWord = reverseString(word);
    // compare the reversed string to the input
    return word === reversedWord;
  }
    // reverse the input string
    
    // compare the reversed string to the input
   
 
  // Write your algorithm here
  /*reverse the input string
  if the reversed string is the same as the input return true
    else
    return false*/


/* 
  Add your pseudocode here
  input a string
  reversed string === string reverse
  return tue
  else 
  false
*/

/*
  Add written explanation of your solution here
  a palindrome is a string or a number that is same if reversed
i make insert a string and reverse it, if it is same as the reverse then it is a palindrome
if it is not same as the reverse, i return false.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("mom"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("abba"));

  console.log("");

  console.log("Expecting: true");
  console.log("=>", isPalindrome("a"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("hi"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;