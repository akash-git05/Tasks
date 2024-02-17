// Print odd numbers in an array
//arrow function

let odd = (arr) => {
  let odd1 = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2!== 0) {
      odd1.push(arr[i]);
    }
  }
  return odd1;
}

console.log(odd([1,2,3,4,5,6,7,8,9,10]));