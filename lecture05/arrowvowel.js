const isvowel=(str)=>{
     count=0;
    for(let i=0;i<str.length;i++){
    if("aeiou".includes(str[i])){
        count++;
    }
   
    }
     return count;
}

let str="ifngjre";
let ans=isvowel(str);
console.log(ans);