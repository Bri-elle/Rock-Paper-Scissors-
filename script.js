/**
 * gets computer's choice
 * @returns string
 */
let humanScore = 0;
let computerScore = 0;
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
let hcMenu = document.querySelector("#humanChoiceMenu");
hcMenu.addEventListener("click", (event) => {
	playRound(event.target.id);
});

/**
 *Game
 *@returns void
 */
// playRound(hc, cc);
// console.log(humanScore, computerScore);
// }
function playRound(humanChoice) {
	let computerChoice = getComputerChoice();
	console.log(humanChoice, computerChoice);
	let scores = document.querySelector("#scores");
	let result = document.querySelector("#result");
	let choices = document.querySelector("#choices");

	// Check if user and computer has the same choice
	if (humanChoice == computerChoice) {
		result.textContent = "draw";
		console.log("draw");
		choices.textContent = `YOU: ${humanChoice} COMPUTER: ${computerChoice} `;

		scores.textContent = `YOU: ${humanScore} COMPUTER: ${computerScore}`;
	}

	// if rock and paper paper, paper wins, increment winner's score
	if (humanChoice == "rock" && computerChoice == "paper") {
		computerScore++;
		result.textContent = "Computer wins";
		choices.textContent = `YOU: ${humanChoice} COMPUTER: ${computerChoice} `;
		scores.textContent = `YOU: ${humanScore} COMPUTER: ${computerScore}`;
	} else if (humanChoice == "paper" && computerChoice == "rock") {
		humanScore++;
		result.textContent = "You win";
		choices.textContent = `YOU: ${humanChoice} COMPUTER: ${computerChoice} `;
		scores.textContent = `YOU: ${humanScore} COMPUTER: ${computerScore}`;
	}

	//if rock and scissors, rock wins
	else if (humanChoice == "rock" && computerChoice == "scissors") {
		humanScore++;
		result.textContent = "You win";
		choices.textContent = `YOU: ${humanChoice} COMPUTER: ${computerChoice} `;
		scores.textContent = `YOU: ${humanScore} COMPUTER: ${computerScore}`;
	} else if (humanChoice == "scissors" && computerChoice == "rock") {
		computerScore++;
		result.textContent = "Computer wins";
		choices.textContent = `YOU: ${humanChoice} COMPUTER: ${computerChoice} `;
		scores.textContent = `YOU: ${humanScore} COMPUTER: ${computerScore}`;
	}
	// if scissors and paper, scissors wins
	else if (humanChoice == "paper" && computerChoice == "scissors") {
		computerScore++;
		result.textContent = "Computer wins";
		choices.textContent = `YOU: ${humanChoice} COMPUTER: ${computerChoice} `;
		scores.textContent = `YOU: ${humanScore} COMPUTER: ${computerScore}`;
	} else if (humanChoice == "scissors" && computerChoice == "paper") {
		humanScore++;
		result.textContent = "You win";
		choices.textContent = `YOU: ${humanChoice} COMPUTER: ${computerChoice} `;
		scores.textContent = `YOU: ${humanScore} COMPUTER: ${computerScore}`;
	}

	if (humanScore == 5 || computerScore == 5) {
		let buttons = document.querySelectorAll("button");
		buttons.forEach((button) => {
			button.disabled = true;
			// create a new button  that starts over and resets scores to 0, make button delete after it runs and enable other buttons
		});
		let startOverBtn = document.createElement("button");
		startOverBtn.textContent = "Start Over";
		startOverBtn.classList.add(
			"bg-fuchsia-800",
			"w-fit",
			"px-6",
			"py-3",
			"mx-auto",
			"rounded-md",
			"text-white"
		);

		const main = document.querySelector("main");
		main.appendChild(startOverBtn);

		startOverBtn.addEventListener("click", () => {
			startOverBtn.style.display = "none";
			buttons.forEach((button) => {
				button.disabled = false;
				// create a new button  that starts over and resets scores to 0, make button delete after it runs and enable other buttons
			});

			humanScore = 0;
			computerScore = 0;
			result.textContent = "";
			choices.textContent = "";
			scores.textContent = `YOU: ${humanScore} COMPUTER: ${computerScore}`;
		});

		// 	if (humanScore > computerScore) console.log("Game Over! you win");
		// 	else console.log("Game Over! computer wins");
	}
}
