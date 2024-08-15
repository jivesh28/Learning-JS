//IIFE -> immediately invoke Function Expression

const chai = (() =>{
    console.log("DB connected");
}
)(); 
// while writing 2 IIfes use a semicolon to seperate them
(function chai2(name)
{
    console.log(`DB connected 2 ${name}`);
}) ("jivesh");
//chai ();


/*
global execution context 
function execution context
Eval EC

2 phases 
1. memory creation phase 
2. Execution phase 
*/
