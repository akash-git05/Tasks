// Remove duplicates from an array
//anonymous function

let unique = function(arr) {
  let unique1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (unique1.indexOf(arr[i]) === -1) {
      unique1.push(arr[i]);
    }
  }
  return unique1;
}

console.log(unique([1,2,3,4,5,6,7,8,9,10]));

// IIFE function

(function(arr){
        let unique1 = [];
        for (let i = 0; i < arr.length; i++) {
          if (unique1.indexOf(arr[i]) === -1) {
            unique1.push(arr[i]);
          }
        }
        return unique1;
      })([1,2,3,4,5,6,7,8,9,10]);
