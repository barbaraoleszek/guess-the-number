let winningNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
let check = document.getElementById(`submit`);
let userValue;
let userGuess = document.getElementById("user-guess");
let tips = document.getElementById("tips");
let tryAgain = document.getElementById("try-again");
let seeScore = document.querySelector(".score");
let seeHighScore = document.querySelector(".highscore");
let userNumber = document.getElementById("user-num");

function handleSubmit(event) {
  event.preventDefault();

  if (userNumber.value > 0 && userNumber.value < 20) {
    userValue = userNumber.value;
    checkUserNumber(userValue);
    userNumber.value = null;
  } else {
    alert(`Choose your number between 1 and 20!`);
    userNumber.value = null;
  }
}
check.addEventListener("click", handleSubmit);

function handleWrongNum() {
  if (score > 1) {
    score--;
    seeScore.innerHTML = `${score}`;
  } else if (score === 1) {
    tips.innerHTML = `You lost`;
    seeScore.innerHTML = `0`;
    userGuess.innerHTML = winningNumber;
    check.disabled = true;
  }
}

function handleWronnumtooltip(value) {
  userGuess.innerHTML = `${userValue}`;
  tips.innerHTML = `Your number is too ${value}`;
}

function checkUserNumber(userValue) {
  if (userValue > winningNumber) {
    handleWronnumtooltip("BIG");
    handleWrongNum();
  } else if (userValue < winningNumber) {
    handleWronnumtooltip("SMALL");
    handleWrongNum();
  } else {
    userGuess.innerHTML = `${userValue}`;
    tips.innerHTML = `GREAT GUESS! You won!`;
    document.querySelector(`body`).style.backgroundColor = `#60b347`;
    check.disabled = true;
    if (score > highscore) {
      highscore = score;
      seeHighScore.innerHTML = `${highscore}`;
    }
  }
}

// wanna try again?
function handleRequest(event) {
  event.preventDefault();
  winningNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;
  tips.innerHTML = `Start guessing!`;
  seeScore.innerHTML = `${score}`;
  userValue;
  userGuess.innerHTML = `?`;
  check.disabled = false;
  document.querySelector(`body`).style.backgroundColor = `black`;
}

tryAgain.addEventListener("click", handleRequest);
