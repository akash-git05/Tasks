const XMLHttpRequest = require('xhr2');
let responseText;
const xhr=new XMLHttpRequest();
xhr.open('GET','https://restcountries.com/v3.1/all');
xhr.send();
xhr.onload = function() {
     responseText=xhr.responseText;
     let data = JSON.parse(responseText);
     data.forEach(country => {
        console.log(`Name:${country.name},capital:${country.capital},flag:${country.flag},`); 
     });     
}