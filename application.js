let randomchoice;
let randomnr;
let result;
let computerCount;
let playerCount;
let i;



//Starting game
images.forEach((image) =>
  image.addEventListener('click', () => {
    if (playerCount >= 5 || computerCount >= 5) {
      return;
    }
 
  })
);


// game logic
function computerplay(randomchoice) {
        randomnr = (Math.random() * 3);
    if (randomnr == 0){
        randomchoice.value = "Rock";
      	return randomchoice.value;
    }
    else if (randomnr == 1) {
        randomchoice.value = "Paper";
      	return randomchoice.value;
    }
    else if (randomnr == 2) {
        randomchoice.value = "Scissors";
      	return randomchoice.value;
    }
}

function singleround() {
  let input = window.prompt("Your Choice:");
  alert("You chose:" + input);
    playerSelection = input;
  	const inputs = [];
    playerSelection = playerSelection().toLowerCase();
    playerSelection = playerSelection().toUpperCase();
    randomchoice = randomchoice().toLowerCase();
    randomchoice = randomchoice().toUpperCase();
  	let arr = ["Rock", "Paper", "Scissors"];
  
    

    if (playerSelection == randomchoice) {
        result = "Square";
        return result;
    }
    else if (playerSelection == randomarray[i] ++) {
        result = "You won";
        playerCount = playerCount ++;
            let obj = {
        result: result,
        playerCount: playerCount,
    };
    return obj;
    }
    else {
        result = "You lost";
        computerCount = computerCount ++;
        let obj = {
        result: result,
        playerCount: playerCount,
    };
    return obj;
    
    }
}
function playgame() {
        while (playerCount < 6) {
                while (computerCount < 6) {
                singleround.repeat(10);
            }
       
                if (playerCount == 5) {
                    console.log("You won the game");
            }
        
            }


    }