// print a message 
// dyanmic language dont define data type 
console.log("Jivesh "); // can use both "" and ' ' 
console.log('i am placed ') ;
// Variables in Javascript -> containers
age=21;
age+=2
console.log(age);
fullName= "Jivesh  Batra"
console.log(fullName);
height = 183.5
console.log(height);
// null vairable 
x=null // we know ki khaali hai 
y= undefined // bc pata hi nhi hai ki kya hai
// ALWAYS USE let , const or var before declaring variable
 
// let -> can update but not redeclare // can be initialised later on
// var -> can upadete and can also re declare *it creates confusion
// const -> neither update nor re declare // always need to initialise

// lesson 1 -> alway use let or const , avoid using var 

let name ="jivu";
console.log(name);

name='baby';
console.log(name);

const istall= true;
console.log(istall);
// istall= no; cant change 
//console.log(tall);

let sex ;
console.log(sex);
sex= "male";
console.log(sex);


let Student ={
    naam:"jivesh",
    umar:21 ,
    passHua:true,
};
console.log(Student) ;
console.log(typeof(Student));

console.log(Student.naam) ;
Student.umar+=1;
console.log(Student["umar"]);
console.log(typeof(Student["umar"]));
let Product ={
    name1:"parker",
    price:200 ,
    rating:5,
    isDeal:true,
    offer: 60,
};
console.log(Product);
let s="123";
s+=1;
console.log(s);
let a=111;
a+=1;
console.log(a);
console.table([fullName ,age]);
// only use let 
/*
prefer not to use var because of scope => "{}"
*/

