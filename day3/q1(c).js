// Sum of all numbers in an array
// anonymous function

let sum=function(arr) {
  let sum1 = 0;
  for (let i = 0; i < arr.length; i++) {
    sum1 += arr[i];
  }
  return sum1;
}

console.log(sum([1,2,3,4,5,6]));
// IIFE function

((arr) =>{
        let sum1 = 0;
        for (let i = 0; i < arr.length; i++) {
          sum1 += arr[i];
        }
        return sum1;
      })([1,2,3,4,5,6]);
