const XMLHttpRequest = require('xhr2');
let responseText;
const xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
     responseText=xhr.responseText;
     let data = JSON.parse(responseText);
     let filteredCountries = data.filter(function(country) {
         return country.population < 20000000;
     });
     console.log(filteredCountries);
}