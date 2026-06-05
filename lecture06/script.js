// console.dir(document.body);
// console.log(document.body);

// console.dir(document.head);

// //document.body.style.background="green";

// //--DOM MANIPULATION--

// //1.selecting with id

// let heading=document.getElementById("101");
// console.log(heading);

// //2.selecting with tag

// let heading1 = document.getElementsByClassName("heading");
// console.dir(heading1);
// console.log(heading1);


// //3.selecting with tag

// let parah=document.getElementsByTagName("p");
// console.log(parah);


// //Query selector

// //returns the first paragraph only
// let elements = document.querySelector("p"); //1st element
// console.dir(elements);


// //using class
// let elements1 = document.querySelector(".heading"); 
// console.dir(elements1);

// //using id

// let elements2 = document.querySelector("101"); 
// console.dir(elements2);



// //returns all paragraph element
// let allelements = document.querySelectorAll("p"); 
// console.dir(allelements);

//innertext->returnd the text content of the element and 
//all its children
// console.log(document.querySelector("div"));
let div=document.querySelector("div");
console.log(div);

//heading
//heading.innerText="new heading";
//new heading
//heading.innerHTML="";

//textContent:returns textual content even for hidden elements


///-----------let pratice questions------------------

let h2=document.querySelector("h2");
console.dir(h2.innerText);
h2.innerText=h2.innerText+"from apna college student";


// ---------- q2--------

let divs=document.querySelectorAll(".box");
// console.log(divs[0]);
// console.log(divs[1]);
// console.log(divs[2]);


// divs[0].innerText="new unique value 1";
// divs[1].innerText="new unique value 2";
// divs[2].innerText="new unique value 3";


for(div of divs){
    console.log(div);
                }

let idx=1;
for(div of divs){
    div.innerText=`new unique value ${idx}`;
    idx++;
}