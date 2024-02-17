// Return all the palindromes in an array
//anonymous function

let palindromes = function(str){
    let palindromes1 = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[str.length - 1 - i]) {
        palindromes1.push(str[i]);
      }
    }
    return palindromes1.join();
  }
  
  console.log(palindromes("madam","mad"));

// IIFE function

( (str) => {
    let palindromes1 = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[str.length - 1 - i]) {
        palindromes1.push(str[i]);
      }
    }
    return palindromes1.join();
      })(["madam","mad"]);