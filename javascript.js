// console.log("my name is vishesh pant");
// age='115'
// console.log(age);
// name ="we won mr stark";
// console.log(name); 
// let Age = 3;
//  Age = 5;
// console.log(Age)
// let a=8;
// let b= 9;
// console.log(a+b)
// let n = prompt("enter a number");
// if(n%5==0){
//     console.log("it is a multiple of 5")
// }else{
//     console.log(n ,"it is not a multiple of 5")
// };
// let str = "vishesh pant";
// console.log(str);
// str.length; 
// let str = "stfu"
// str2 = str.toUpperCase()
// console.log(str2);
// let str = prompt("enter your name");

// console.log("@"+str+str.length);
// let fooditems = ["apple","banana","pineapple","tomato","potato"]
// console.log(fooditems)
let boxes = document.querySelectorAll(".box");
let resetbtn = document.querySelector("#reset-btn");
let msg = document.querySelector("#msg");
let newgamebtn = document.querySelector("#new-btn");
let msgcontainer = document.querySelector(".msgcontainer")

let turn = true;
let wincond = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 5, 8],
    [0, 4, 8],
    [2, 4, 6],
];

const resetGame = () =>{
    turn = true;
    enableBoxes();
    msgcontainer.classList.add("hide");
}
  

boxes.forEach((box) => {
    box.addEventListener("click", () => {
        console.log("button was clicked");
        if (turn === true) {
            box.innerText = "0";
            turn = false;
        } else {
            box.innerText = "X";
            turn = true;
        }
        box.disabled = true;
        checkWinner();
    });

});
const disableBoxes = () => {
    for (let box of boxes){
        box.disabled = true;
    }
}
const enableBoxes = () => {
    for (let box of boxes){
        box.disabled = false;
        box.innerText="";
    }
}

const showWinner = (winner) =>{
 msg.innerText=`congratulations , winner is ${ winner}`;
 msgcontainer.classList.remove("hide");
 disableBoxes();
};

const checkWinner = () => {
    for (let cond of wincond) {
        let pos1val = boxes[cond[0]].innerText;
        let pos2val = boxes[cond[1]].innerText;
        let pos3val = boxes[cond[2]].innerText;
        if (pos1val != "" && pos2val != "" && pos3val != "") {
            if (pos1val == pos2val && pos2val == pos3val) {
               console.log("congratulation winner", pos1val);
               showWinner(pos1val);
            }
        }
    }
}

newgamebtn.addEventListener("click" , resetGame);
resetbtn.addEventListener("click" , resetGame);