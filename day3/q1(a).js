// Print odd numbers in an array 
//in anonymous function
let M=function(arr) {
    for (let a of arr) 
        if (a%2!==0){
            console.log(a);
        }
    };
M([1,2,3,4,5]);
//in IIFE function

(function() {
    let N=function(arr) {
        for (let a of arr) 
            if (a%2!==0){
                console.log(a);
            }
        };
    N([1,2,3,4,5]);
})();