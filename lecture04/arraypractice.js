let arr=[1,2,3,4];
let fruits=["hi","hello","why","do"];

// console.log(arr[0]);
// console.log(arr[1]);
// console.log(arr[2]);

// for(let i=0;i<arr.length;i++)
// {
// console.log(arr[i]);
// }

// console.log(arr.length);
// for(let x of arr){
//     console.log(x);
//                  }
// console.log(fruits);


//js do have inbuild function 
//like shift unshift pop push
//which are like used in java queues
arr[1]=23;
console.log(arr[1]);
console.log(arr.push(20));
console.log(arr.unshift(33));
console.log(arr.shift(23));
console.log(arr.pop(33));

console.log(arr.reverse());


arr[1]=23;
console.log(arr[1]);


let nums=[1,2,3,4,5,56];
let sum=0;
for(let i=0;i<nums.length;i++){
   sum+=nums[i]; 
}

console.log(sum);

let max=0;
for(let i=0;i<nums.length;i++){
    if(nums[i]>max){
        max=nums[i];
    }
    console.log(max);
    
}

//let const var;

/*
//for()
//int i=1;
//while(cond)
{
increment
}

//dowhile
dowhile which excutes at least one time

do{
}while(condition);






*/