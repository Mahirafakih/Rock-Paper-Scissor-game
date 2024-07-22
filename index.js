let userScore=0;
let compScore=0;

const user_score= document.querySelector("#user-score");
const comp_score= document.querySelector("#comp-score");
const choices = document.querySelectorAll(".choice");
const msgPara  = document.querySelector("#msg");
console.log(msgPara);

const genCompChoice = () =>
{
    const options= ['rock','paper','scissors'];
    const randIndx=Math.floor (Math.random() * 3);
    return options[randIndx]; 
    
}
const Drawgame= () =>
{
    console.log('Game was draw.')
    msgPara.innerText = "Game was draw!! "

}

const compWin  = () =>
{
    console.log('Computer won the game')
}

const showWinner = (userWin) => {
    if (userWin) {
        console.log("You winn!!")
        msgPara.innerText = "You win!!" 
        userScore++
        user_score.innerText= userScore;
    } else {
        console.log("You lose, Computer wins!")
        msgPara.innerText = "You lose. Loserrr"
        compScore++;
        comp_score.innerText = compScore;
    }

}
const playGame = (userChoice) => {

    const compChoice = genCompChoice(); 
    console.log("Comp choice=" , compChoice);

if (userChoice === compChoice){
    Drawgame();
} else {
    let userWin = true;
  if(userChoice ==="rock"){
 userWin= compChoice === "paper" ? false : true;
  }
  else if(userChoice === "paper"){
    userWin = compChoice === "scissors" ? false : true;
  } else {
    userWin = compChoice === "rock" ? false : true
  }
  showWinner(userWin);
}
}

    
      
        

    







choices.forEach((choice) =>
{
    choice.addEventListener("click", () => {
        const userChoice= choice.getAttribute("id");
        console.log("choice is clicked ",userChoice);
        playGame(userChoice);
    });
});