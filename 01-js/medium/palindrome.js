/*
  Implement a function `isPalindrome` which takes a string as argument and returns true/false as its result.
  Note: the input string is case-insensitive which means 'Nan' is a palindrom as 'N' and 'n' are considered case-insensitive.

  Once you've implemented the logic, test your code by running
  - `npm run test-palindrome`
*/

function isPalindrome(str) {
  str = str.split(" ").join("").toLowerCase().replace(/[?.,\/#!$%\^&\*;:{}=\-_`~()]/g, "").replace(/\s{2,}/g, " ");
  var start =0;
  var end = str.length - 1;

  while(start < end){
    if(str[start] != str[end]) return false;
    start++;
    end--;
  }
  return true;
}

module.exports = isPalindrome;
