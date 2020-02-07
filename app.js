const userScore = 0;
const computerScore = 0;
const userScore_span = document.getElementById("userScore");
const computerScore_span = document.getElementById("compScore");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".resultMessage");
const rock_div = document.getElementById("rock");
const paper_div = document.getElementById("paper");
const scissors_div = document.getElementById("scissors");

const game = userChoice => {
  console.log(userChoice);
};

const main = () => {
  rock_div.addEventListener("click", function() {
    game("rock was clicked");
  });
  paper_div.addEventListener("click", function() {
    game("paper was clicked");
  });
  scissors_div.addEventListener("click", function() {
    game("scissors was clicked");
  });
};

main();
