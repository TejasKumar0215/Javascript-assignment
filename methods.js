/*var arr = [];
while(arr.length <= 5){
    var r = Math.floor(Math.random() * 100) + 1;
    if(arr.indexOf(r) === -1) arr.push(r);
}
console.log(arr);*/

/*const countries = ['India','Sweden','Pakistan','Srilanka','Australia']
    function categorizeCountries(keyword) {
        for (country of countries) {
            if (keyword = 'land') {
                console.log([countries.filter((country) => country.endsWith('land'))])
            }
            else {
                console.log('Country does not Exists')
            }
        } 
    }
    console.log(categorizeCountries(['land']))*/



/*const names = ['Abhay','Manju','Ephiza','Tina']
var filterednames = names.filter(names => names.length > 7);
console.log(filterednames)*/

/*const countries = ['India','Sweden','Pakistan','Srilanka','Australia',]
var filteredcountries = countries.filter(function(word){
    return word[0] === 'E'
});
console.log(filteredcountries)*/

/*const countries = ['India','Sweden','Pakistan','Srilanka','Australia']
var filteredcountries = countries.filter(countries => countries.length > 6);
console.log(filteredcountries);*/

/*const products = [
    { product: 'bannana', price: 3},
    { product: 'mango', price: 6},
    { product: 'potato', price: ''},
    { product: 'avocado', price: 8},
    { product: 'coffee', price: 10},
    { product: 'tea', price: ''},
]
var result = products.filter(user => user.price > 0);
 
console.log(result);*/

/*const countries = ['India','Sweden','Pakistan','Srilanka','Australia']
var firstcountries = countries.find(function(element){
    return element.length = 1;
});
console.log(firstcountries);*/

/*const countries = ['India','Sweden','Pakistan','Srilanka','Australia']

countries.findIndex(checklength);

function checklength(countries) {
  return countries.length >=6;
}
console.log(countries*/


/*const countries_array= ['India','Sweden','Pakistan','Srilanka','Australia']
let searching_index = countries_array.findIndex
(countries => countries === "Srilanka");
console.log(searching_index); 
console.log(countries_array[searching_index]);*/


/*const countries_array= ['India','Sweden','Pakistan','Srilanka','Australia']
let searching_index = countries_array.findIndex
(countries => countries === "Russia");
console.log(searching_index); 
console.log(countries_array[searching_index]);*/

// For Each

/*const countries = ['India','Sweden','Pakistan','Srilanka','Australia']
countries.forEach (function(e){

    console.log(e);

})*/


/*const names = ['Abhay','Manju','Ephiza','Tina']
names.forEach(function(e){
    console.log(e);
})*/

/*const numbers = [1,2,3,4,5,6,7,8,9]
numbers.forEach(function(e){
    console.log(e);
})*/

//Reduce

/*const numbers = [1, 2, 3, 4, 5,6,7,8,9,10];

let sum = numbers.reduce(function(a, b){
  return a + b;
});

console.log(sum);*/

//Filter

/8function alphaCountry() {
    const countries = ['India','Sweden','Pakistan','Srilanka','Australia']
    const finalObj = [];
    let alphaIndexer = 0;

    while (alphaIndexer !== countries.length) {
    const startsWith = countries.filter((obj) => obj.name.startsWith(countries[alphaIndexer]))
    finalObj.push({'letter': countries[alphaIndexer], 'count': startsWith.length + ' times'})
    alphaIndexer++
  }

  return finalObj;
  
}*/

//Map

/*const countries = ['India','Sweden','Pakistan','Srilanka','Australia']
modifiedcountries = countries.map(function(x){return x. toUpperCase();})
console.log(modifiedcountries);*/

/*const numbers = [1,2,3,4,5,6,7,8,9]
modifiednumbers = numbers.map(function(x){return x*x});
console.log(modifiednumbers);*/

/*const names = ['Abhay','Manju','Ephiza','Tina']
modifiednames = names.map(function(x){return x. toUpperCase();})
console.log(modifiednames);*/


/*const products = [
    { product: 'bannana', price: 3},
    { product: 'mango', price: 6},
    { product: 'potato', price: ''},
    { product: 'avocado', price: 8},
    { product: 'coffee', price: 10},
    { product: 'tea', price: ''},
]
let productandprice = products.map(function(x){
    return x.product + x.price
});
console.log(productandprice);*/




/*let randomArray = Array.from({
    length: 5
}, () => Math.floor(Math.random() * 100));
console.log(randomArray)*/



/*let numbers = [1,2,3,4,5,6,7,8,9];
let sum = numbers.reduce(function (previousValue, currentValue) {
    return previousValue + currentValue;
});

console.log(sum);*/

/*const characters ='ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';

function generateString(length) {
    let result = ' ';
    const charactersLength = characters.length;
    for ( let i = 0; i < length; i++ ) {
        result += characters.charAt(Math.floor(Math.random() * charactersLength));
    }

    return result;
}

console.log(generateString(5));*/

/*for (var x=0; x<=100; x++) {
    if (x % 2 === 0) {
            console.log(x + x);
    }
    else {
            console.log(x + x);
    }
}*/






