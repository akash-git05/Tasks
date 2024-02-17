// Return median of two sorted arrays of the same size.
//anonymous function

let median = function(arr1, arr2) {
  let mid1 = Math.floor(arr1.length / 2);
  let mid2 = Math.floor(arr2.length / 2);
  if (arr1[mid1] > arr2[mid2]) {
    return arr1[mid1];
  } else if (arr1[mid1] < arr2[mid2]) {
    return arr2[mid2];
  } else {
    return (arr1[mid1] + arr2[mid2]) / 2;
  }
}

console.log(median([1,2,3,4,5,6], [7,8,9,10,11,12]));

// IIFE function

(function(arr1, arr2){
        let mid1 = Math.floor(arr1.length / 2);
        let mid2 = Math.floor(arr2.length / 2);
        if (arr1[mid1] > arr2[mid2]) {
          return arr1[mid1];
        } else if (arr1[mid1] < arr2[mid2]) {
          return arr2[mid2];
        } else {
          return (arr1[mid1] + arr2[mid2]) / 2;
        }
      })([1,2,3,4,5,6], [7,8,9,10,11,12]);