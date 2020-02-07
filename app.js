let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("compScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".resultMessage");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};

const userWin = () => {
  userScore++;
  console.log(userScore);
};

const userLose = () => {};

const userTie = () => {};

const game = userChoice => {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      userWin();
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      userLose();
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      userTie();
      break;
  }
};

const main = () => {
  rock_div.addEventListener("click", function() {
    game("rock");
  });
  paper_div.addEventListener("click", function() {
    game("paper");
  });
  scissors_div.addEventListener("click", function() {
    game("scissors");
  });
};

main();
