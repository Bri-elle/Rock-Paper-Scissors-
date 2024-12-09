/**
 * gets computer's choice
 * @returns string
 */

function getComputerChoice() {
	//create an array containing rock, paper and scissor
	let moves = ["rock", "paper", "scissors"];
	// generate randoms values between 0 and 2
	let move = Math.floor(Math.random() * 3);
	//place random value in array and return result
	return moves[move];
}

/**
 *  gets human choice
 * @returns string
 */
function getHumanChoice() {
	let move = prompt("Rock Paper Scissors");
	if (move.toLowerCase() == "rock") return "rock";
	else if (move.toLowerCase() == "paper") return "paper";
	else if (move.toLowerCase() == "scissors") return "scissors";
}

/**
 *Game
 *@returns void
 */
function playGame() {
	let humanScore = 0;
	let computerScore = 0;
	let rounds = 5;

	// play 5 rounds
	for (let i = 0; i < rounds; i++) {
		let cc = getComputerChoice();
		let hc = getHumanChoice();
		playRound(hc, cc);
		console.log(humanScore, computerScore);
	}
	function playRound(humanChoice, computerChoice) {
		console.log(humanChoice, computerChoice);
		// Check if user and computer has the same choice
		if (humanChoice == computerChoice) {
			console.log("draw");
			return;
		}

		// if rock and paper paper, paper wins, increment winner's score
		if (humanChoice == "rock" && computerChoice == "paper") {
			computerScore++;
			console.log("Computer wins");
			return;
		} else if (humanChoice == "paper" && computerChoice == "rock") {
			humanScore++;
			console.log("You win");
			return;
		}

		//if rock and scissors, rock wins
		else if (humanChoice == "rock" && computerChoice == "scissors") {
			humanScore++;
			console.log("You win");
			return;
		} else if (humanChoice == "scissors" && computerChoice == "rock") {
			computerScore++;
			console.log("Computer wins");
			return;
		}
		// if scissors and paper, scissors wins
		else if (humanChoice == "paper" && computerChoice == "scissors") {
			computerScore++;
			console.log("Computer wins");
			return;
		} else if (humanChoice == "scissors" && computerChoice == "paper") {
			humanScore++;
			console.log("You win");
			return;
		}
	}

	// final result
	if (humanScore < computerScore) {
		console.log(" Game Over! computer wins");
	} else if (humanScore > computerScore) {
		console.log("Game Over! You win");
	}
}

// Start Game
playGame();
