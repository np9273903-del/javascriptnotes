let nums=[22,33,44,55];
let newArr=nums.map((val)=>{
       return val*2;
})

console.log(newArr);

//use of reduce 
let arr=[1,2,3,4];
const output=arr.reduce((prev,curr)=>{
   return prev+curr;
})

console.log(output);
