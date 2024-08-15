function addTwoNumbers(a , b) // parameters
{
    //console.log(a+b); // prints
}
addTwoNumbers(4 ,null); // arguments while calling

function sum(a , b)
{
    let res = a+b;
    return res;
}
const  ans =sum(3,9);
//console.log('sum is', ans );

function loginUserMessage(username)
{
    if(!username) 
    {
        console.log("Please Enter a username");
        return null;
    }
    return `${username} just logged in`;
}
//onst res= loginUserMessage("");
// console.log(res);
function calculateCartPrice(...num) // rest operator
{
    return num;
}
//console.log(calculateCartPrice(200 , 800 , 333 , 3330 , 33));

const user ={
    name : 'jivesh' ,
    price : 100 
}

function handleObject(anyObject)
{
    console.log(`Username is ${anyObject.name}`);
}
handleObject(user);
