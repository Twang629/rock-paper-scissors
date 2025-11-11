const options = ["rock", "paper","scissors"];

function getComputerChoice(){
    const choice = options[Math.floor(Math.random() * options.length)]; //Gets random number from 0 to .999..., then multiplies by 3 (array legth). Rounds down
    return choice;                                                      //to 0, 1, or 2. This selects the respective array index.
}   

function checkWinner(playerSelection,computerSelection){ //compares selections, determines and returns winner.
    if(playerSelection == computerSelection){
        return "Tie";
    }
    else if( //all win conditions
        (playerSelection == "rock" && computerSelection == "scissors") ||
        (playerSelection == "scissors" && computerSelection == "paper") ||
        (playerSelection == "paper" && computerSelection == "rock") )
    {
        return "Player";
    }
    else{
        return "Computer";
    }
}

function playRound(playerSelection,computerSelection){ //displays round result winner
    const result = checkWinner(playerSelection,computerSelection);
    if(result == "Tie"){
        return "Tie. Drat!";
    }
    else if(result == "Player"){
        return `${playerSelection} beats ${computerSelection}. You win this round.`;
    }
    else if(result == "Computer"){
        return `${computerSelection} beats ${playerSelection}. Bummer.`;
    }
}

function getPlayerChoice(){
    let validatedInput = false;

    while(validatedInput == false){
        const choice = prompt("rock, paper, or scissors"); //prompts user for choice
        if(choice == null){
            continue;
        }
        const choiceInLower = choice.toLowerCase(); //sets input to lowercase
        if(choice.includes(choiceInLower)){
            validatedInput = true;
            return choiceInLower;
        }
    }
}

function game(){
    let scorePlayer = 0;
    let scoreComputer = 0;

    for(let i = 0; i < 5; i++){
        const playerSelection = getPlayerChoice();
        const computerSelection = getComputerChoice();

        console.log(playRound(playerSelection,computerSelection));
        console.log("...");

        if(checkWinner(playerSelection,computerSelection) == "Player"){ //increments scoreboard (ties not tracked)
            scorePlayer++;
        }
        else if (checkWinner(playerSelection,computerSelection) == "Computer"){
            scoreComputer++
        }

        if(scorePlayer>scoreComputer){ //console reports current score
            console.log(`You are winning ${scorePlayer} - ${scoreComputer}. You got this!`);
        }
        else if (scoreComputer > scorePlayer){
            console.log(`You are losing ${scorePlayer} - ${scoreComputer}. Don't lose hope!`);
        }
        else{
            console.log(`All tied up at ${scorePlayer}`);
        }
    }
}

game();

