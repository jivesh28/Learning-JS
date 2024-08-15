/*
const num= new Number(7900000);
console.log(num);
console.log(num.toLocaleString('en-IN'));
console.log(num.toString());

const num2= new Number(8.688);
console.log(num2.toFixed(2));
console.log(num2.toPrecision(1));
console.log(num2.valueOf());

*/
console.log(Math.random()); // gives value from 0 to 1

//console.log( 1+ Math.floor(Math.random() * 10)); // prints an integer from 1 to 11 
const min=1;
const max=6;

console.log(Math.floor(Math.random()*(max-min+1)) + min);

