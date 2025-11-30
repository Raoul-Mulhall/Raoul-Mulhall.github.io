// Listens for button clicks and calls play()
document.getElementById("rock").addEventListener("click", () => play("rock"));
document.getElementById("paper").addEventListener("click", () => play("paper"));
document.getElementById("scissors").addEventListener("click", () => play("scissors"));

function getComputer() {
    const choices = ["rock", "paper", "scissors"];
    return choices[Math.floor(Math.random() * 3)];
}

// Game tracking
let round = 0;
let roundTotal = 5;
let userGuesses = [];     //store user’s guesses

function play(playerChoice) {

    if (round === roundTotal) {
        document.getElementById("result").innerHTML =
            "Game Over!<br><br>Your guesses were: " + userGuesses.join(", ");
        return;
    }

    const computerChoice = getComputer();
    let result = "";

    // Determine the winner
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

    // Store the user’s guess
    userGuesses.push(playerChoice);

    // Advance round
    round++;

    // Show round result
    document.getElementById("result").innerHTML =
        "Round " + round + "<br>" +
        "You chose " + playerChoice +
        ", the computer chose " + computerChoice +
        ".<br>" + result;

    // If last round just finished, show final list of guesses
    if (round === roundTotal) {
        document.getElementById("result").innerHTML +=
            "<br><br>Game Over!<br>Your guesses were: " + userGuesses.join(", ");
    }
}

