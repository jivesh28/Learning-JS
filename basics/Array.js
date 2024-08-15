// slice and splice 
// push and concat(always does in new array)
// includes 
// index of 
// shift and unshift 
// .join()
// naming it 
// flatting array
// making array out of individual variables (Array.of())
// isArray and  .from()

let num=[0,1,2,3,4, 5, "jivesh" , "true"] ; // in js an array can have multiple datatypes
//console.log(num[2]);
let num2= num.slice(0,4);
//console.log(num2);
//let num3=num.splice(0,4);
//console.log(num);
//console.log(num3);
num.push(8);
//console.log(num);
let names=[ 'jivesh' , 'jivu' , 'cutie'] ;
num.push(names);

//num.concat(names)
let merg=[ ...names ,...num ] ;
//console.log(merg);
num.shift();
num.unshift(9);
//console.log(num.includes('jai'));
//console.log(num.indexOf(5));
//console.log(typeof(num.join()));
const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//console.log(another_array.flat(200));
let a= 1;
let b=2;
let c=3;
console.log(Array.of(a,b,c,3));
