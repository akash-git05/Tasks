// Return all the palindromes of string in an array
//arrow function

let palindromes = (str) => {
    let palindromes1 = [];
    for (let i = 0; i < str.length; i++) {
      if (str[i] === str[str.length - 1 - i]) {
        palindromes1.push(str[i]);
      }
    }
    console.log(...palindromes1);
  }
  
  palindromes("madam","mad");