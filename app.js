let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("compScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_p = document.querySelector(".resultMessage > p");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const getComputerChoice = () => {
  const choices = ["rock", "paper", "scissors"];
  const randomNum = Math.floor(Math.random() * 3);
  return choices[randomNum];
};

const convertToUpperCase = lc => {
  if (lc === "rock") return "Rock";
  if (lc === "paper") return "Paper";
  return "Scissors";
};

const userWin = (userChoice, computerChoice) => {
  userScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToUpperCase(
    userChoice
  )} beats ${convertToUpperCase(computerChoice)} You Win!`;
};

const userLose = (userChoice, computerChoice) => {
  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  result_p.innerHTML = `${convertToUpperCase(
    computerChoice
  )} beats ${convertToUpperCase(userChoice)} You Lose! `;
};

const userTie = (userChoice, computerChoice) => {
  result_p.innerHTML = `${convertToUpperCase(
    userChoice
  )} ties ${convertToUpperCase(computerChoice)} It's a Tie `;
};

const game = userChoice => {
  const computerChoice = getComputerChoice();

  switch (userChoice + computerChoice) {
    case "rockscissors":
    case "paperrock":
    case "scissorspaper":
      userWin(userChoice, computerChoice);
      break;
    case "rockpaper":
    case "paperscissors":
    case "scissorsrock":
      userLose(userChoice, computerChoice);
      break;
    case "rockrock":
    case "paperpaper":
    case "scissorsscissors":
      userTie(userChoice, computerChoice);
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
