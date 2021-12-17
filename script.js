playerScore = 0;
computerScore = 0;


function computerPlay()
{
    let choice = ['rock','paper','scissors'];
    return choice[Math.floor(Math.random()*choice.length)]
}
console.log(computerPlay())

function playRound(playerSelection, computerSelection) {
    // your code here!
    let result = "";
    if((playerSelection == 'rock' && computerSelection == 'scissors') ||
      (playerSelection == 'scissors' && computerSelection == 'paper')||
      (playerSelection == 'paper' && computerSelection == 'rock'))
    {
      playerScore += 1;
      result = ('You win ' + playerSelection + ' Bets ' + computerSelection + "<br><br>Player Score :" + playerScore  + "<br>Computer score: " + computerScore);
      console.log(result);
            //document.getElementById('result').innerHTML = result;
    }
    else if (playerSelection == computerSelection) {
      result = ('It\'s a tie. You both chose ' + playerSelection
          + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore);
          console.log(result);
          //document.getElementById('result').innerHTML = result;
    }
    else {
      computerScore += 1
      result = ('You lose! ' + computerSelection + ' beats ' + playerSelection
          + "<br><br>Player score: " + playerScore + "<br>Computer score: " + computerScore)
          console.log(result);
          //document.getElementById('result').innerHTML = result;
    }
    if(computerScore > playerScore)
    {
     console.log("Sorry ..!! Batter Luck Next Time..!!");
     let y = 'Sorry ..!! Batter Luck Next Time..!!';
     document.getElementById('win').innerHTML = y;
     document.getElementById('result').innerHTML = result
    }
    else if(computerScore < playerScore)
    {
     console.log("Congratulations..!!! You Win The Game !!");
     let x = 'Congratulations..!!! You Win The Game !!';
     document.getElementById('win').innerHTML = x;
     document.getElementById('result').innerHTML = result
    }
    return
}
  for (let index = 1; index < 6; index++) {
    //console.log("i:",index);
    
  let choice = prompt("Enter your choice ");
  let playerSelection = choice.toLowerCase();
  const computerSelection = computerPlay();
  playRound(playerSelection, computerSelection);
  }