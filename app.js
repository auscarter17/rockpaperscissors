const possibleChoices = ["rock", "paper", "scissors"]
let computerChoice
let playerChoice
let playerScore = 0
let computerScore = 0
let resultsContainer = document.querySelector("#results-container")
let buttons = document.querySelectorAll("button")

function getComputerChoice() {
  computerChoice = possibleChoices[Math.floor(Math.random() * possibleChoices.length)]
}


buttons.forEach(button => {
  button.addEventListener('click', function(event) {
      const buttonId = event.target.id;
      playerChoice = buttonId
      playRound()
  });
});


function displayScore() {
  console.log(`"SCORE: Player: ${playerScore} | CPU: ${computerScore}"`)
}

function playerWin() {
  console.log("You win!")
  playerScore++
  displayScore()
}

function computerWin() {
  console.log("Computer wins!")
  computerScore++
  displayScore()
}

function gameDraw() {
  console.log("It's a draw!")
  displayScore()
}

function playRound() {
  console.log(playerChoice)
  getComputerChoice()
  console.log(computerChoice)

  if (playerChoice === "rock") {
    if (computerChoice === "rock") {
      gameDraw()
    } else if (computerChoice === "paper") {
      computerWin()
    } else if (computerChoice === "scissors") {
      playerWin()
    }
  } else if (playerChoice === "paper") {
    if (computerChoice === "rock") {
      playerWin()
    } else if (computerChoice === "paper") {
      gameDraw()
    } else if (computerChoice === "scissors") {
      computerWin()
    }
  } else if (playerChoice === "scissors") {
    if (computerChoice === "rock") {
      computerWin()
    } else if (computerChoice === "paper") {
      playerWin() 
    } else if (computerChoice === "scissors") {
      gameDraw()
    }
  }
}

// function playGame() {
//   for (let i = 0; i < 5; i++) {
//     playRound()
//   }
//   if (playerScore > computerScore) {
//     console.log("YOU WIN THE GAME!")
//   } else if (playerScore < computerScore) {
//     console.log("COMPUTER WINS THE GAME!")
//   } else {
//     console.log("THE GAME IS A TIE!")
//   }
// }

// playGame()