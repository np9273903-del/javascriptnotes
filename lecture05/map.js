let nums=[22,33,44,55];
let newArr=nums.map((val)=>{
       return val*2;
});

array.map((element) => {
    return result;
});


let nums = [10, 20, 30];

nums.map((val, index, arr) => {
    console.log(val);    // 10, 20, 30
    console.log(index);  // 0, 1, 2
    console.log(arr);    // [10,20,30]
});
console.log(newArr);

//use of reduce 
let arr=[1,2,3,4];
const output=arr.reduce((prev,curr)=>{
   return prev+curr;
})

console.log(output);
