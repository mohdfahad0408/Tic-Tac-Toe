let boxes=document.querySelectorAll(".box");
let resetBtn=document.querySelector(".reset");
let newGameBtn=document.querySelector(".newGame");
let msgContainer=document.querySelector(".msg-container");
let msg=document.querySelector("#msg");
let clickcount=0;



const showWinner=(winner)=>{
    msg.innerText=`Congratulations winner is ${winner}`;
    msgContainer.classList.remove("hide");
    clickcount=0
}


let turnO=true;
let winningPattern=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]];
boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        clickcount++;
        console.log(clickcount)
        if( turnO===true){
        box.innerText="X";
        turnO=false;
        }else{
            box.innerText="O"
            turnO=true;
        }
        box.disabled=true;
        if(clickcount===9){
            draw();
        }
        checkWinner()
        
    })
})




const boxEnable=()=>{
    for(let box  of boxes){
        box.disabled=false;
        box.innerText=""
    }
}

const boxDisable=()=>{
    for(let box  of boxes){
        box.disabled=true;
    }
}

const checkWinner=()=>{
    for(let pattern of winningPattern){
        let pos1val=boxes[pattern[0]].innerText;
        let pos2val=boxes[pattern[1]].innerText;
        let pos3val=boxes[pattern[2]].innerText;
        if(pos1val!="" &&pos2val!=""&&pos3val!=""){
            if(pos1val===pos2val && pos2val===pos3val){
                console.log("winner");
                showWinner(pos1val);
                boxDisable()
                resetBtn.classList.add("hide")
            }
        }
    }
} 

const draw=()=>{
    msg.innerText="Game is DRAW!!!"
    msgContainer.classList.remove("hide")
    clickcount=0;
}
const resetGame=()=>{
    turnO=true;
    boxEnable();
    msgContainer.classList.add("hide")
    resetBtn.classList.remove("hide")
}

newGameBtn.addEventListener("click",resetGame);
resetBtn.addEventListener("click",resetGame);