// Rotate an array by k times
//anonymous function

let rotate = function(arr, k) {
  for (let i = 0; i < k; i++) {
    arr.unshift(arr.pop());
  }
  return arr;
}

console.log(rotate([1,2,3,4,5,6,7,8,9,10], 3));

// IIFE function

(function(arr, k){
        let rotate1 = [];
        for (let i = 0; i < k; i++) {
          rotate1.unshift(arr.pop());
        }
        return rotate1;
      })([1,2,3,4,5,6,7,8,9,10], 3);
