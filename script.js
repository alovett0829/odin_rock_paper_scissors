    const playerChoice = document.querySelectorAll('button');

    const totalScore = document.querySelector('#total-score'); //displays each player's score//
    const weaponChoice = document.querySelector('#weapon-choice'); //display weapons choice//
    const winner = document.querySelector('#winner'); //display winner each round//

    let playerScore = 0;
    let computerScore = 0;

    const player = document.createElement('h1'); //to diplay each Score
    const computer = document.createElement('h1')
    totalScore.appendChild(player);
    totalScore.appendChild(computer);

    const displayPlayerWeapon = document.createElement('h3'); // shows what each person chose;
    const displayComputerWeapon = document.createElement('h3');
    weaponChoice.appendChild(displayPlayerWeapon);
    weaponChoice.appendChild(displayComputerWeapon);  
    

    const roundWinner = document.createElement('h6'); //create winner each round

    playerChoice.forEach((choice) => {
        choice.addEventListener('click', function () {
            const computerSelection = computerPlay ();
            playRound(choice.id, computerSelection);
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
        }
        
        

    };

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

    
    
    
    // {  
        
        

    //     player.textContent = 
    //     weaponChoice.appendChild(player);

    //     computer.textContent = ;
    //     weaponChoice.appendChild(computer);

    //     if (choice == computerSelection) {
            

    //     }  
    //         roundWinner.textContent = "Player Wins";
    //         winner.appendChild(roundWinner);

    //         displayPlayerWeapon.textContent = `Player Score is ${playerScore}`;
    //         return;

    //     } else if  {
    //         playerScore++;
    //         roundWinner.textContent = "Player Wins";
    //         winner.appendChild(roundWinner);

            

    //     } else if {
    //         playerScore++;
    //         roundWinner.textContent = "Player Wins";
    //         winner.appendChild(roundWinner);

    //         displayPlayerWeapon.textContent = `Player Score is ${playerScore}`;
    //         return;

    //     } else {
    //         computerScore++;
    //         roundWinner.textContent = "Computer Wins";
    //         winner.appendChild(roundWinner);

    //         displayComputerWeapon.textContent = ;           
    //         return
    //     }

    //     if (playerScore == 5 || computerScore == 5) {
    //         endgame();
    //     } 


    // }      

    

    // // function endgame () {
    // //     totalScore.removeChild();
    // // }    
   

    // //     if (playerScore > computerScore) {
    // //             console.log("You won! Congratulations!");
    // //         } else if (computerScore > playerScore) {
    // //             console.log("Haha you lose!");
    // //         } else {
    // //             console.log("It's a tie");
    // //         }     