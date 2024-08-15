// nesting of multiple objects 
//  array of objects
const user ={};
user.id = "1";
user.name="Jivesh";
user.isLoggedIn=true;

//console.log(user);
/* Nesting of objects
const regularUser ={
    name : 'Jivu' ,
    fullName : {
        first : {
            l1 : 'J',
            l2: 'ivesh'
        },
        second : {
            l1 : 'B' ,
            l2 : 'atra'
        }
    },
    age : 21
}
console.log(regularUser.fullName.first.l2);
*/

const obj1 = {1 : 'a' , 2 : 'b'};
const obj2 = {3 : 'c' , 4 : 'd'};
const obj3 = {5 : 'e' , 6 : 'f'};

//const obj4 = Object.assign({}, obj1 , obj2 , obj3) ; 1 st parameter is target and all others source 

//console.log(obj4);

const obj4 = {...obj1 , ...obj2 , ...obj3}; // spread function 
//console.log(obj4); 

const users = [
    {
        id : 1 ,
        name : 'jivesh'
    } ,
    {
        id : 2 ,
        name : "cutu"
    } ,
    {
        id : 3 ,
        name : "baby"
    }
]
//console.log(users[2].id);

//console.log(Object.keys(user));
//console.log(Object.values(user));
//console.log(Object.entries(user));

// destructuring

const course ={
    name: 'js' ,
    price : 100 ,
    teacher : 'xyz'
}
console.log(course.teacher);

 const { teacher : t } =course; // deconstruction used in react
t= course.teacher; // dont do this 
console.log(t);

// *********************************** API ********************  -> json {empty and non named object} OR in form of array of objects

// backed ki value uthake aage use  karna 
// jo kaam khud na karna ho wo kisi aur ke sir pe daal do  

/*
{
    "name": 'jivu' ,
    "cname" : "js" ,
    "paise " : "free"
}
*/
 
