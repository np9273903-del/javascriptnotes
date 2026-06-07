let event=document.querySelector("#b");

// event.onclick=()=>{
//     alert("handler1");
//     let a=10;
//     a++;
//     console.log(a);
    
// }
event.addEventListener("click",(evt)=>{
    console.log("button one was clicked  handler1");
    //event object
   console.log(evt.type);
   
});


event.addEventListener("click",()=>{
    console.log("button one was clicked handler2");
    
});

const handler3=("click",()=>{
    console.log("button one was clicked handler3");
    });


event.removeEventListener("click",handler3);
// event.onclick=(evt)=>{
//     alert("handler2");
//     let a=10;
//     a++;
//     console.log(a);
//     console.log(evt);
//     console.log(evt.type);
//     console.log(evt.clientX,evt.clientY);
//     };


//overwriting the code handler2 will run only
let event1=document.querySelector("#box");

event1.onclick=(evt)=>{
    console.log("you are inside div");
    console.log(evt);
    console.log(evt.type);
    
    
};


