//1)question

let newbutton=document.createElement("button");
newbutton.innerText="clickme";

newbutton.style.color="white";
newbutton.style.backgroundColor="green";


document.querySelector("body").prepend(newbutton);


//2)question

let para=document.querySelector("p");
para.classList.add("newClass");
console.log(para.className);

