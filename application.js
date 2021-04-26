let computerCount = 0;
let playerCount = 0;



//Starting game
images.forEach((image) =>
  image.addEventListener('click', () => {
    if (playerCount >= 5 || computerCount >= 5) {
      return;
    }
 
  })
);


// game logic
function computerplay() {
    let randomnr = (Math.random() * 3);
  	let randomchoice = '';
  	let obj = {
    randomnr: randomnr,
    randomchoice: randomchoice,
    };
 
    if (randomnr == 0){
        randomchoice = "Rock";
    }
    else if (randomnr == 1) {
        randomchoice = "Paper";
    }
    else if (randomnr == 2) {
        randomchoice = "Scissors";
    }
  return obj;
  	
  
   
}


function singleround(input) {
  let result = '';
  let computerChoice = computerplay();
  input = window.prompt("Your Choice:");
  alert("You chose:" + input);
  let playerSelection = input;
  	playerSelection = playerSelection().toLowerCase();
    playerSelection = playerSelection().toUpperCase();

    

  if (playerSelection == computerChoice) {
        result = "Square";
      	console.log(result);
    }
    else if (playerSelection == randomnr +1) {
        result = "You won";
        console.log(result);
    } else {
        result = "You lost";
        console.log(result);
    }
  return result;
    }

function playGame() 
let result = "";
let sr = singleround();
  sr.repeat(9);
    while (result == "") {
  if (sr == "You won") {
       playerCount ++;
  }
    if (playerCount == 5) {
      result = "playerwins";
     } 
  else if (sr == "You lost") {
    computerCount ++;
  }
    if (computerCount == 5) {
      result = "computerwins";
  }
    return result;
  
}
  

function wehaveawinner(win) {
  	win = playGame();
  	let message.textContent = "";
      if (win == "playerwins") {
        message.textContent("The player wins");
      } else {
        message.textContent("The computer wins");
        
      }
   

  } 