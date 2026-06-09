let boxes=document.querySelectorAll(".box");
let reset=document.querySelector("#reset");
let newgamebtn=document.querySelector("#new-btn");
let msgcontainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let turnO=true;

//2d array
//let arr2=[[1,2,3],[2,3,4],[2,3,4]];

const winpattern=[
    [0,1,2],
    [3,4,5],
    [6,7,8],
    [0,3,6],
    [1,4,7],
    [2,5,8],
    [0,4,8],
    [2,4,6]
];



const resetgame=()=>{
    let turnO=true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}





//boxes.forEach(()=>{});
//boxes.forEach(()=>{});
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        console.log("box was clicket");
        if(turnO==true){
            box.innerText="O";
            turnO=false;
        }
        else{
            box.innerText="X";
            turnO=true;
        }
        box.disabled=true;
        checkWinner();
    });
});

const enableBoxes=()=>{
    for(let box of boxes){
        box.disabled=false;
        box.innerText="";
    }
}

const disableBoxes=()=>{
    for(let box of boxes){
        box.disabled=true;
    }
}

const showWinner=(winner)=>{
    msg.innerText=`congratulation Winner is ${winner}`;
    msgcontainer.classList.remove("hide");
    disableBoxes();

}

const checkWinner=()=>{
    for(let pattern of winpattern){
    let pos1val=boxes[pattern[0]].innerText;
    let pos2val=boxes[pattern[1]].innerText;
    let pos3val=boxes[pattern[2]].innerText;
    
    if(pos1val !=""&& pos2val!=""&& pos3val!="")
    {
        if(pos1val===pos2val && pos2val===pos3val){
            console.log("winner",pos1val);
            
            showWinner(pos1val);
        }
    }
    }
}

newgamebtn.addEventListener("click",resetgame);
reset.addEventListener("click",resetgame);
