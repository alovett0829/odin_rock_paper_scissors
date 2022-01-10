
    const playerChoice = document.querySelectorAll('.weapon');
    const score = document.querySelector("#score");
    
    const playerScore = 0;
    const computerScore = 0;    
    
    let computerSelection = " ";

    playerChoice.forEach((choice) => {

        choice.addEventListener('click', () => {
            console.log(choice.id);

            computerSelection = computerPlay();
            console.log(computerSelection);

            const tally = document.createElement('p');
            tally.textContent = `This is the computer\'s choice ${computerSelection}`;
            score.appendChild(tally);


        });
    });


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

    
        
        
        
        
        





    //     

    //     function game() {    

    //       function playRound (playerSelection, computerSelection) {
    //             let playerCard = playerSelection.toLowerCase();

    //             if (playerCard == computerSelection) {
    //                 return "Tie";
    //             } else if (playerCard == "rock" && computerSelection == "scissors") {
    //                 playerScore++; 
    //                 return "Player Wins";
    //             } else if (playerCard == "paper" && computerSelection == "rock") {
    //                 playerScore++;
    //                 return "Player Wins";
    //             } else if (playerCard == "scissors" && computerSelection == "paper") {
    //                 playerScore++;
    //                 return "Player Wins";
    //             } else {
    //                 computerScore++;
    //                 return "Computer Wins";
    //             }            
    //         }

    //         const playerSelection = prompt("Choose your weapon");
    //         const computerSelection = computerPlay();
  
    //     console.log(playRound(playerSelection, computerSelection));
    //     console.log("Player Selection: " + playerSelection);
    //     console.log("Computer Selection:" + computerSelection);
    //     console.log(playerScore);
    //     console.log(computerScore);
    // }

    // // for (let i = 0; i < 5; i++) {
    // //     game();
    // // }

    // if (playerScore > computerScore) {
    //     console.log("You won! Congratulations!");
    // } else if (computerScore > playerScore) {
    //     console.log("Haha you lose!");
    // } else {
    //     console.log("It's a tie");
    // }