"use strict"; // treat all js code as new version 

//alert("hello")
//alert(3+3) ->  gives a pop-up we are using node js not the browsers
console.log(1+1) // code readability should be high

/* data types use "typeof(variableName)"
1. Primitive (7)  // call by value hote hai
a. Number 2^53
b. boolean 
c. string
d. undefined not assigned value 
e. null standalone value 
f. BigInt
g. Symbol // unique banata hai
2. Objects -> arrays , functions // call by reference
 it is a collection of values
 key1:value1 ,
key2 : value2 ,
 declare object with const
 keys of constant objects could be changed 

*/

console.log(typeof null) ; // object
console.log(typeof undefined) ; // undefined 
 const id =Symbol('123');
 const id2 =Symbol('123');
 console.log(id==id2);
const num= 22222222222222222222222222222222222222222222222222n ;
console.log(typeof num);

const heros =[1 ,2 ,3, 4,5] ; // array is a tu
let jivesh= {
    name : "jivu" ,
    age: 22,
}  // object
console.log(typeof jivesh);

function nam()
{
    console.log(jivesh);
}
//const naame =nam(); 
console.log(typeof nam);

// ++++++++++++++++++++++++++++++++++++++++ MEMORY
 // stack(primitive) , heap (non primitive) 
 