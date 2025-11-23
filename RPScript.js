//Listens for button clicks then calls the play function and gives it the corresponding button value
document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("paper").addEventListener("click", () => play("paper"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));


function getComputer() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
} //Makes computer return random choice 

let round = 0;
let roundTotal = 3;


function play(playerChoice) {

    if (round === roundTotal) {
        document.getElementById("result").innerHTML = "Game Over!!!"
        return;
    }

    const computerChoice = getComputer(); //Calls computer choice into variable
    let result = ""; //Defines result variable as string


    if ((playerChoice === "rock" && computerChoice === "scissors") ||
        (playerChoice === "paper" && computerChoice === "rock") ||
        (playerChoice === "scissors" && computerChoice === "paper")
    ) {
        result = "You win!!!";


    }
    else if (playerChoice === computerChoice) {
        result = "It was a tie!!!";

    }
    else {
        result = "You lose!!!";

    }

    round = round + 1;


    //Creates result message and send to result div box
    document.getElementById("result").innerHTML = "You chose " + playerChoice + ", the computer chose " + computerChoice + ", " + result;




}
