// singleton from constructors
/*
Object.create  -> constructors
*/

// object literals

// defie both keys and values
const sym = Symbol('key1');
const Student={
    name : 'JIVESH' ,
    age : 21,
    location : "delhi" , 
    email : "j@google.com ",
    isUsing : false,
    [sym] : "key" , // if used normally the type will be of string only 
    'fullname' : "jivesh batra"
}
console.log(Student.name);
console.log(Student['email']);
// console.log(Student.fullname); not use 
console.log(Student['fullname']);
console.log(Student[sym]);  // if used normally type would be string 

Student.age=22;
//Object.freeze(Student);
//Student.age=100;
//console.log(Student);

Student.greeting = function()
{
    console.log("hello");
}
console.log(Student.greeting());
Student.greeting2 = function()
{
    console.log(`Hello ${this.name} you are ${this.age} years old`);
}
console.log(Student.greeting2());