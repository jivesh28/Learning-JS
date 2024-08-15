const arr =[1,2,3,4,5,6,43,2,2,3,3,4,3,2,2,3];

let n = arr.length;
console.log(n);
// for of 
//[" " ," " ," "]

let str = "JIvesh Batra"
for(const it of str) // jiske upar loop lagana hai
{
   //console.log(it);
}

// maps ->unique and ordered
let map = new Map();
map.set('In' ,'india');
map.set('In2' ,'india1');
map.set('In3' ,'india3');

for(const [key,value] of map) // maps are not iteratable
{
   // console.log(key , '-' , value);
}
const Student={
    name : 'JIVESH' ,
    age : 21,
    location : "delhi" , 
    email : "j@google.com ",
    isUsing : false,
    sym : "key" , // if used normally the type will be of string only 
    //'fullname' : "jivesh batra"
}
/* 
Maps are iteratable by this but not objects in js
for (const [key,value]of student) {
    console.log(key , '-' , value);
}
use forin loop
*/
for (const key in Student) {
   // console.log(`${key} is related to ${Student[key]}`);
    }

    for (const key in arr) 
    {
        //console.log(`${key} is related to ${arr[key]}`); // keys return karta hai
    }


//use coding(name of array).
/*
arr.forEach(function(item) {console.log(item);})
arr.forEach((element) => {
    console.log(element);
});
*/
arr.forEach( (elemen , index,arr )=> {
    //console.log(elemen,index);
});

const myCoding = [
    {
        languageName: "javascript",
        languageFileName: "js"
    },
    {
        languageName: "java",
        languageFileName: "java"
    },
    {
        languageName: "python",
        languageFileName: "py"
    },
]

myCoding.forEach( (item) => {
    
    console.log(item.languageName);
} )