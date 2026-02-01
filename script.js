//function getPlayerChoice () {
//    let playerChoice = prompt("rock, paper or scissor?");
//    return playerChoice;
//}

let playerScore = 0;
let computerScore = 0;

// get reference of DOM elements
const roundResult = document.querySelector('#round-result')
const playerScoreSpan = document.querySelector('#player-score')
const computerScoreSpan = document.querySelector('#computer-score')
const winner = document.querySelector('#winner')
const buttons = document.querySelectorAll('button')
const resetButton = document.querySelector('#reset-btn')
const click = document.querySelector('#click')
const musicBtn = document.querySelector('#music-btn')
const gameMusic = document.querySelector('#music')
const gameOver = document.querySelector('#game-over')
const victorySound = document.querySelector('#victory')

let isPlaying = false;

musicBtn.addEventListener('click', () => {
    if (isPlaying) {
        gameMusic.pause();
        musicBtn.style.opacity = "0.6";
    } else {
        gameMusic.play();
        musicBtn.style.opacity = "1";
    }

    isPlaying = !isPlaying;
})

// hide the button until game is over
resetButton.style.display = "none";

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

function playRound(playerSelection) {
    // stop the game if someone wins
    if (playerScore === 5 || computerScore === 5) return;

    let computerSelection = getComputerChoice();
    let resultMessage = "";

    if (playerSelection === computerSelection) {
        resultMessage = `It's a tie! Both chose ${playerSelection}`;
    } else if (
        (playerSelection === "rock" && computerSelection === "scissor") ||
        (playerSelection === "paper" && computerSelection === "rock") ||
        (playerSelection === "scissor" && computerSelection === "paper")) {
            playerScore++;
            resultMessage = `You win! ${playerSelection} beats ${computerSelection}`;
    } else {
        computerScore++;
        resultMessage = `You lose! ${computerSelection} beats ${playerSelection}`;
    }

    // update UI
    roundResult.textContent = resultMessage;
    playerScoreSpan.textContent = playerScore;
    computerScoreSpan.textContent = computerScore;

    checkWinner();
}

function checkWinner() {
    if(playerScore === 5) {
        winner.textContent = "Victory! You Win!";
        resetButton.style.display = "block";
        victorySound.play();
    } else if (computerScore === 5) {
        winner.textContent = "Gamer Over! You Lose!";
        resetButton.style.display = "block";
        gameOver.play();
    }
}

// Add event listener to buttons
buttons.forEach((button) => {
    button.addEventListener('click', () => {
        playRound(button.id);

        click.currentTime = 0;
        click.play();
    });
});

function resetGame() {
    playerScore = 0;
    computerScore = 0;

    playerScoreSpan.textContent = "0";
    computerScoreSpan.textContent = "0";
    roundResult.textContent = "Play your move to start the game!";
    winner.textContent = "";
    resetButton.style.display = "none";
}

// Add event listener for play again button
resetButton.addEventListener('click', resetGame);
