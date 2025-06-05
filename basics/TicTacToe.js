let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#rst-button");
let newbtn = document.querySelector("#new-game");
let msgcontainer = document.querySelector(".msg-container");
let msg = document.querySelector("#msg");
let turnO = true;

const winptrn = [
    [0,1,2],
    [0,3,6],
    [0,4,8],
    [1,4,7],
    [2,5,8],
    [2,4,6],
    [3,4,5],
    [6,7,8]
];

boxes.forEach((box) => {
    box.addEventListener("click",() =>{
        console.log("box clicked")
        if(turnO){
        box.innerText="O"
        turnO = false;
        }else{
            box.innerText = "X"
            turnO = true;
        }
        box.disabled = true 
        checkWinner();
    });
});
const disableboxes = () =>{
    for(box of boxes){
        box.disabled = true;
    }
}

const enableboxes = () =>{
    for(box of boxes){
        box.disabled = false;
        box.innerText = "";
    }
}
const showWinner = (winnner) => {
    msg.innerText = `congratulations The winner is ${winnner}`
    msgcontainer.classList.remove("hide");
    disableboxes();
}


const checkWinner = () => {
    for(let pattern of winptrn){
        // console.log(pattern[0],pattern[1],pattern[2]);
        // console.log(boxes[pattern[0]].innerText,boxes[pattern[1]].innerText,boxes[pattern[2]].innerText);
        
        let posval1 = boxes[pattern[0]].innerText;
        let posval2 = boxes[pattern[1]].innerText;
        let posval3 = boxes[pattern[2]].innerText;

        if(posval1 != "" && posval2 != "" && posval3 != ""){
            if(posval1 == posval2 && posval2 == posval3){
            showWinner(posval3);}  
        }
    }
}

const Resetgame = () =>{
    turnO = true
    enableboxes();
    msgcontainer.classList.add("hide")
}

newbtn.addEventListener("click",Resetgame);
resetbtn.addEventListener("click",Resetgame)