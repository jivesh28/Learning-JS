/*
flasy values : false , 0 , -0 , Bigint 0n ,"" , null , undefined , NaN
truthy values : true ,1, " " , "0" , "flase" ,[] , {} ,function() {} ,
*/

const obj={ 1: "ff"};
if(Object.keys(obj).length>0) 
{
    //console.log(`haan sexxy`);
}
else {
    //console.log(`maadarchod email daal`);
}

// Nullish coalescing operator (??) : null undefined
// safety checker for null and undefined input 

let val;
val= 5?? 10 // 5
val = null ?? 10 // 10
val = undefined ?? 99 ; // 99
val =  null ?? 5 ?? 10 ; // 5
//console.log(val);

const p=110;
p<100 ? console.log("sex") : console.log("no"); // ternary operator
