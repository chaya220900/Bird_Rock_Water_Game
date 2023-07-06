let userScore = 0;
let computerScore = 0;
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_p = document.querySelector(".result > p");

const bird_div = document.getElementById("b");
const rock_div = document.getElementById("r");
const water_div = document.getElementById("w");

function getComputerChoice() {
  const choices = ["b", "r", "w"];
  const randomNumber = Math.floor(Math.random() * 3);
  return choices[randomNumber]; // console.log(getComputerChoice());
}

function convertToWord(letter) {
  if (letter === "b") return "Bird";
  if (letter === "r") return "Rock";
  return "Water";
}

function win(userChoice, computerChoice) {
  userScore++; // console.log("WIN");
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  // console.log("user  " + user);
  // console.log("comp  " + computer);

  const userChoice_div = document.getElementById(userChoice);
  const smallUserWord = " (user)".fontsize(3).sub();
  const smallComputerWord = " (comp)".fontsize(3).sub();
  result_p.innerHTML =
    convertToWord(userChoice) +
    smallUserWord +
    " < beat > " +
    convertToWord(computerChoice) +
    smallComputerWord +
    "<br> You Win !";
  userChoice_div.classList.add("green-glow");
  setTimeout(function () {
    userChoice_div.classList.remove("green-glow");
  }, 500);
}

function lose(userChoice, computerChoice) {
  // console.log("LOSE");

  computerScore++;
  userScore_span.innerHTML = userScore;
  computerScore_span.innerHTML = computerScore;
  const smallUserWord = " (user)".fontsize(3).sub();
  const smallComputerWord = " (comp)".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML =
    convertToWord(userChoice) +
    smallUserWord +
    " < loses to > " +
    convertToWord(computerChoice) +
    smallComputerWord +
    "<br> You lost ...";
  userChoice_div.classList.add("red-glow");
  setTimeout(() => userChoice_div.classList.remove("red-glow"), 500);
}

function draw(userChoice, computerChoice) {
  // console.log("DRAW");
  const smallUserWord = " (user)".fontsize(3).sub();
  const smallComputerWord = " (comp)".fontsize(3).sub();
  const userChoice_div = document.getElementById(userChoice);
  result_p.innerHTML =
    convertToWord(userChoice) +
    smallUserWord +
    " < equals >  " +
    convertToWord(computerChoice) +
    smallComputerWord +
    "<br> It's a draw.";
  userChoice_div.classList.add("gray-glow");
  setTimeout(() => userChoice_div.classList.remove("gray-glow"), 500);
}

function game(userChoice) {
  const computerChoice = getComputerChoice();
  //   console.log("XD  >>>  " + userChoice);
  //
  //   console.log("Computer Choice => " + computerChoice);
  //   console.log("User Choice => " + userChoice);
  //   console.log("==================");

  switch (userChoice + computerChoice) {
    case "bw":
    case "rb":
    case "wr":
      //   console.log("USER WINS.");
      win(userChoice, computerChoice);
      break;

    case "br":
    case "rw":
    case "wb":
      //   console.log("COMPUTER WINS.");
      lose(userChoice, computerChoice);
      break;

    case "bb":
    case "rr":
    case "ww":
      draw(userChoice, computerChoice);
      //   console.log("ITS A DRAW.");
      break;
  }
}

function main() {
  bird_div.addEventListener("click", function () {
    //   console.log("click bird");
    game("b");
  });
  rock_div.addEventListener("click", function () {
    //   console.log("click rock");
    game("r");
  });
  water_div.addEventListener("click", function () {
    //   console.log("click water");
    game("w");
  });
}

main();
