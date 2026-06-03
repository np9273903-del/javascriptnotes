
//using common function
// function vowel(str){
//     count=0;
//     for(let i=0;i<str.length;i++){
//     if("aeiou".includes(str[i])){
//         count++;
//     }
   
//     }
//      return count;
// }

function countvowel(str){
    for(let ch of str)
        {
            let count=0;
        if(ch==="a"||ch==="e"||ch==="i"||ch==="o"||ch==="u")
        {
            count++;
        }

    }
    return count;
}

let str="aeifngjre";
let ans=countvowel(str);
console.log(ans);

