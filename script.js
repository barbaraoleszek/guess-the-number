const winningNumber = Math.trunc(Math.random() * 20) + 1;
let check = document.getElementById(`submit`);
let userValue;
let userGuess = document.getElementById("user-guess");
let tips = document.getElementById("tips");
let tryAgain = document.getElementById("try-again");
let score = document.getElementById("score");

console.log(winningNumber);

function handleSubmit(event) {
  event.preventDefault();
  let userNumber = document.getElementById("user-num");
  if (userNumber.value > 0) {
    userValue = userNumber.value;
  } else {
    alert(`Choose your number!`);
  }

  checkUserNumber(userValue);
}
check.addEventListener("click", handleSubmit);

function checkUserNumber(userValue) {
  if (userValue > winningNumber) {
    userGuess.innerHTML = `${userValue}`;
    tips.innerHTML = `Your number is too BIG!`;
  } else if (userValue < winningNumber) {
    userGuess.innerHTML = `${userValue}`;
    tips.innerHTML = `Your number is too SMALL!`;
  } else {
    userGuess.innerHTML = `${userValue}`;
    tips.innerHTML = `GREAT GUESS! You won!`;
  }
}

// wanna try again?
function handleRequest(event) {
  location.reload();
}

tryAgain.addEventListener("click", handleRequest);
