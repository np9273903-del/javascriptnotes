let promiseOne = new Promise(function(resolve,reject){
    //do an async task
    //db calls,crpytography,network
    setTimeout(function(){
        console.log('Async task is completed');
        resolve();
        
    },1000);
})

promiseOne.then(function(){
    console.log("promise consumed");
    
})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log("async task 2");
        resolve();
    },2000);
}).then(function(){
    console.log("Async 2 resolved");
    
})

//data consumation value passed in resolve

const promiseThree = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username:"chai",email:"chai@example.com"})
    },1000)
})
promiseThree.then(function(user){
    console.log(user);
    
})

const primeFour = new Promise(function(resolve,reject){
    
})



