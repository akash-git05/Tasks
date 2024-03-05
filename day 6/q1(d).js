const XMLHttpRequest = require('xhr2');
let responseText;
const xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
     responseText=xhr.responseText;
     let data = JSON.parse(responseText);
    let totalPopulation = data.reduce(function(a, b) {
        return a + b.population;
    }, 0);
    console.log(totalPopulation);

     
}