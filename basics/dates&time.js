let myDate= new Date();
/*
console.log(myDate);
console.log(myDate.getMonth()+1); //months are 0 based 
console.log(myDate.getFullYear());
console.log(myDate.getDay()); // days are 1 based 
console.log(myDate.toLocaleTimeString());
console.log(myDate.toLocaleString());
console.log(myDate.toLocaleDateString());
console.log(myDate.toDateString());
*/


let timeStamp= Date.now(); // gives the exact milli seconds

let Birthday = new Date("2003-02-28")
console.log(Birthday.toDateString());
console.log(Birthday.toLocaleString());
console.log(Birthday.toLocaleDateString());

let newDate = new Date();
newDate.toLocaleString('default',{
    weekday : "long",
    day: "2-digit"
})
console.log(newDate);
