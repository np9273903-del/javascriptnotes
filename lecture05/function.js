function myfunction(){
    console.log("Hello");
    
}
myfunction();
myfunction();
myfunction();


//function with parament
function me(msg,n){ //parameter
    console.log(msg,n);
    
}
me("nikhil",100); //argument

//function returing a value

function sum(x,y){
    s=x+y;
    return s;
}

let val=sum(2,3);
console.log(val);


//arrow function 

//common function
function sum(a,b){
    return a+b;
}


const arrowsum=(a,b)=>{
    console.log(a+b);
    };

//2.multiplcaton arrow function

// function mult(a,b){
//     return a*b;
// }
const mult = (a,b) =>{
    return a*b;
}
let m=mult(2,3);
console.log(m);


