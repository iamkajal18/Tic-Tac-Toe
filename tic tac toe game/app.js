let boxes = document.querySelectorAll(".box");
let winningMsg=document.querySelector(".winningMsg");


let turnO=true;
let flag;
const winPatterns = [
    [0,1,2] ,[0,3,6], [6,7,8],[2,5,8],
    [1,4,7],[0,4,8],[2,4,6],[3,4,5],
];

boxes.forEach((box)=>{
    box.addEventListener("click",()=>{
        
        if(turnO)
        {   box.style .color="black";
            box.innerText ="O";
            turnO =false;
        }
        else{
            box.style.color="white";
            box.innerText = "X";
            turnO =true; 
        }
        box.disabled = true;  

        checkWinner();
    });
});

const disableBoxes=()=>{
    for (let box of boxes){
        box.disabled=true;
    }
    
}
const showWinner=(winner)=>{
    winningMsg.innerText=` Congratulation !! 🥇 ${winner} is Winner `;
    disableBoxes();
    };
const checkWinner=()=>{
    for(let pattern of winPatterns){
    let pos1=boxes[pattern[0]].innerText;
    let pos2=boxes[pattern[1]].innerText;
    let pos3=boxes[pattern[2]].innerText;
    if(pos1!=""  && pos2!="" &&pos3!=""){
        if(pos1===pos2 && pos2===pos3){
            flag=true;
        }
        if(flag){
            console.log("Winner",pos1);
            disableBoxes();
            showWinner(pos1);
        } 
    }
  }
};
