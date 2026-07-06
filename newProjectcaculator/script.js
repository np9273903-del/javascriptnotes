const display=document.getElementById("display");

const buttons=document.querySelectorAll("button");

for(let i=0;i<buttons.length;i++){
    buttons[i].onclick=function(){
       const  value=buttons[i].innerText;
        display.value+=value;
    }
}

