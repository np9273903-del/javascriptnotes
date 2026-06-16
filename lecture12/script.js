// // function hello(){
// //     console.log("hello");
    
// // }

// // setTimeout(hello,4000); //timeout function

// // //using arrow function

// // setTimeout(()=>{
// //  console.log("hello");
 
// // },4000);



// //----callback hell------


// function getData(dataId,getNextData){
//     setTimeout(()=>{
//         console.log("data",dataId);
//      if(getNextData){
//         getNextData(); 
//      }
//     },2000);
//   }

// //callback hell
// getData(1,()=>{
//     getData(2,()=>{
//         getData(3);
//     })
// });
// getData(2);
// getData(3);

//-------Promise-------


let promise=new Promise((resolve,reject)=>{
   console.log("i am a promise");
   //resolve is use to fullfil promise
   //resolve("sucess");
   //reject
   //reject("some error");

});





function getData(dataId,getNextData){
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
        console.log("data",dataId);
        resolve("sucess");
     if(getNextData){
        getNextData(); 
     }
    },2000);
    })
  }
