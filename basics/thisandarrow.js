// this keyword -> current context
const task = 'bakchodi' ;
const user ={
    name : 'Jivesh' , 
    age : 21 ,
    message : function()
    {
        console.log(`${this.name},is here`);
    }
}
//console.log(user.message());
//user.name = 'Jivu' ;
//console.log(user.message());
//console.log(user);

//console.log(this); // prints "{}" becuase there is no context and this keyword refers to nothing

function chai()
{
    let userName='jivesh'
    console.log(this); // give many things
    console.log(this.userName); // this doesnt work in funtions , it works in objects only
}
//chai() ;

const chaii = () =>  {  // arrow function
    let user = 'Jivesh'
    console.log(this); // gives {}
}
//chaii();

const addTwo= (a, b) => {
    return a+b;
}
//console.log(addTwo(3,5)) ;

const add = (a,b) => (a+b) ; // implicit way single line code used in react we use () and if we use { } we need to use the return key word

//console.log(add(3,4)); 

const fun =  (a,b, c) => ({name :'jivu'}); 
//console.log(fun(1,2,3));

//const myArr= [1,3,5,7,9] ;
//myArr.forEach( function (){});
//myArr.forEach( () => {}) ;
//myArr.forEach( () => () ) ;