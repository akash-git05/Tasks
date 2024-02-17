// Return all the prime numbers in an array
//arrow function
let primes=(arr)=>{
  let primes1 = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 2; j < arr[i]; j++) {
      if (arr[i] % j === 0) {
        break;
      } else {
        primes1.push(arr[i]);
      }
    }
  }
  return primes1;
}

console.log(primes([1,2,3,4,5,6]));