console.dir(document.body);
console.log(document.body);

console.dir(document.head);

//document.body.style.background="green";

//--DOM MANIPULATION--

//1.selecting with id

let heading=document.getElementById("101");
console.log(heading);

//2.selecting with tag

let heading1 = document.getElementsByClassName("heading");
console.dir(heading1);
console.log(heading1);


//3.selecting with tag

let parah=document.getElementsByTagName("p");
console.log(parah);


//Query selector

//returns the first paragraph only
let elements = document.querySelector("p"); //1st element
console.dir(elements);


//using class
let elements1 = document.querySelector(".heading"); 
console.dir(elements1);

//using id

let elements2 = document.querySelector("101"); 
console.dir(elements2);



//returns all paragraph element
let allelements = document.querySelectorAll("p"); 
console.dir(allelements);