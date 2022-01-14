    const playerChoice = document.querySelectorAll('button');

    const totalScore = document.querySelector('#total-score'); //displays each player's score//
    const weaponChoice = document.querySelector('#weapon-choice'); //display weapons choice//
    const winner = document.querySelector('#winner'); //display winner each round//

    let playerScore = 0;
    let computerScore = 0;

    const player = document.createElement('h1'); //to diplay each Score//
    const computer = document.createElement('h1')
    totalScore.appendChild(player);
    totalScore.appendChild(computer);

    const displayPlayerWeapon = document.createElement('h2'); // shows what each person chose//
    const displayComputerWeapon = document.createElement('h2');
    weaponChoice.appendChild(displayPlayerWeapon);
    weaponChoice.appendChild(displayComputerWeapon);  
    
    const roundWinner = document.createElement('h3'); //create winner each round//

    playerChoice.forEach((choice) => {
        choice.addEventListener('click', function () {
            const computerSelection = computerPlay ();
            playRound(choice.id, computerSelection);

            if (playerScore == 5 || computerScore == 5) {
                endgame();
            }
        });
    });
       
    function playRound (choice, computerSelection) {
            player.textContent = `Player Score is ${playerScore}`;
            computer.textContent = `Computer Score is: ${computerScore}`;
        
            displayPlayerWeapon.textContent = `Player chose ${choice}`;
            displayComputerWeapon.textContent = `Computer chose ${computerSelection}`;    

            if (choice == computerSelection) {
                roundWinner.textContent = "It's a tie!"
                winner.appendChild(roundWinner);
                return;

            }   else if (choice == "rock" && computerSelection == "scissors") {
                playerScore++;
                roundWinner.textContent = "Player Wins";
                winner.appendChild(roundWinner);
                player.textContent = `Player Score is ${playerScore}`;   
                return;

            }   else if (choice == "paper" && computerSelection == "rock") {
                playerScore++;
                roundWinner.textContent = "Player Wins";
                winner.appendChild(roundWinner);
                player.textContent = `Player Score is ${playerScore}`;   
                return;

            }   else if (choice == "scissors" && computerSelection == "paper") {
                playerScore++;
                roundWinner.textContent = "Player Wins";
                winner.appendChild(roundWinner); 
                player.textContent = `Player Score is ${playerScore}`;   
                return;
        
            }   else {
                computerScore++;
                roundWinner.textContent = "Computer Wins";
                winner.appendChild(roundWinner);
                computer.textContent = `Computer Score is: ${computerScore}`;
                return;
            };
    }

    

    function computerPlay () {
        let computerNumber = Math.floor(Math.random()*3);    
            if (computerNumber == 0) {
                return "rock";
            } else if (computerNumber == 1) {
                return "paper";
            } else {
                return "scissors";
            }
        }

    function endgame () { 
        
        document.getElementById('rock').setAttribute("disabled", "");
        document.getElementById('paper').setAttribute("disabled", "");
        document.getElementById('scissors').setAttribute("disabled", "");

        weaponChoice.removeChild(displayPlayerWeapon);
        weaponChoice.removeChild(displayComputerWeapon); 
     
        if (playerScore == 5) {
            roundWinner.textContent = "Congratulations!!!! You won!";
        } else {
            roundWinner.textContent = "BooHoo! The Computer beat yo ass";
        }

        
    }   


