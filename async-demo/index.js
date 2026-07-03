import {numberToWords} from 'afn-currency-text'

console.log("Before");
setTimeout(() => {
    console.log('Reading user from database');
}, 2000)
console.log("After");

console.log(numberToWords(51039, 'da'));