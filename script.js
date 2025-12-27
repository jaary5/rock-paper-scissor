function getComputerChoice () {
    let choice = Math.floor(Math.random() * 3);

    if (choice === 0) {
        return "rock";
    } else if (choice === 1) {
        return "paper";
    } else {
        return "scissor";
    }
}

function getHumanChoice () {
    let choice = prompt("rock, paper or scissor?");
    return choice;
}

let humanScore = 0;
let computerScore = 0;

function playRound () {
    let h_Choice = getHumanChoice().toLowerCase();
    let c_Choice = getComputerChoice();

    if (h_Choice === "rock") {
        if (c_Choice === "paper") {
            computerScore++;
        } else if (c_Choice === "rock") {

        } else {
            humanScore++;
        }
    } else if (h_Choice === "paper") {
        if (c_Choice === "paper") {

        } else if (c_Choice === "rock") {
            humanScore++;
        } else {
            computerScore++;
        }
    } else {
        if (c_Choice === "scissor") {
            
        } else if (c_Choice === "rock") {
            computerScore++;
        } else {
            humanScore++;
        }
    }
}

for (let i = 0; i < 5; i++) {
    playRound();
}   

if (humanScore === computerScore) {
    console.log("Game Draw!");
} else {
    console.log((humanScore > computerScore) ? "You Win!" : "You Lose!");
}
