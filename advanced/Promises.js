const promiseOne = new Promise((resolve,reject)=>{
    // Do an async task
    // DB calls
    setTimeout(function(){
        resolve()
       // console.log('OHH YEAHH');
    },200)
});

promiseOne.then(function(){
   // console.log('promise done');
})
/*
new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve();
        console.log('OHH YEAH2');
    },200)
}).then(function(){
    console.log('s s');
})
*/

const promiseThree=new Promise(function(resolve ,reject){
    setTimeout(function(){
resolve({username:'chai' ,mail: 'moj@masti.com'})
    },100)
})
promiseThree.then(function(user)
{
  //  console.log(user);
})
const promiseFour=new Promise(function(resolve ,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:'chai' ,mail: 'moj@masti.com'})
        }
        else {
            reject('gadbad hogyi re babaa')
        }
    },1000)
})
/*
promiseFour
.then((user)=>{
    console.log(user);
    return user.username;
})
.then((username)=>{
    console.log(username);
})
.catch(function(error){
    console.log(error);
})
.finally(function(){
    console.log('kuch toh bhaut crazy ho chuka hai');
})
*/
const promiseFive=new Promise(function(resolve ,reject){
    setTimeout(function(){
        let error=false;
        if(!error){
            resolve({username:'javascript' ,mail: 'moj@masti.com'})
        }
        else {
            reject('gadbad hogyi re babaa')
        }
    },1000)
})

async function consumePromisFive(){  // doesnt handle error
    try{
    const response =await promiseFive
    console.log(response);}
    catch(error){
        console.log(error);
    }
}
consumePromisFive()

async function getAllUser(){  // doesnt handle error
    try{
    const requestURL= 'https://api.github.com/users/hiteshchoudhary'
    const response =await fetch(requestURL)
    console.log(response);
    let data = await response.json()
}
    catch(error){
        console.log('e',error);
    }
}
getAllUser();
const requestURL= 'https://api.github.com/users/hiteshchoudhary'
fetch(requestURL) // it is a promise
.then((data)=>{
    
    return data.json();
})
.then((datarefined)=>console.log(datarefined))
.catch((error)=> console.log('gadbad hogyi re deva'))
