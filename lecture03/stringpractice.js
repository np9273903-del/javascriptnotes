let str="nikhil";
console.log(str[0]);
console.log(str[1]);
console.log(str[2]);

//for loop-nikhil
// for(let i=0;i<str.length;i++){
//     console.log(str[i]);
    
// }


//for of
for(let ch of str){
    console.log(ch);
    }

console.log(str.length);
console.log(str.toUpperCase(str));
console.log(str.toLowerCase(str));


//reverse the string

console.log(str.split("").reverse().join(""));
console.log(str.charAt(3));
console.log(str.includes("nikhil"));
console.log(str.substring(0,3));


let str1="purva";
let str2="nikhil";
//template literals to print easily
console.log(`hey ${str1} here my self ${str2} is boy`);


//convert a string into array

let str5="hello";

let arr=str5.split("");
console.log(arr.reverse().join(""));

