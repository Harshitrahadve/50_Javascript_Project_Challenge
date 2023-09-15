let randomGuess = Math.round(Math.random() * 100 + 1);

const userGuess = document.querySelector(".userInput");
const submit = document.querySelector(".submit-btn");
const guessSlot = document.querySelector(".guesses");
const remaining = document.querySelector(".remaining");
const lowOrHigh = document.querySelector(".lowOrHigh");
const startOver = document.querySelector(".resultBox");

const p = document.createElement("p");

let prevGuess = [];
let numGuess = 1;
let playGame = true;
console.log(randomGuess);

if (playGame) {
  submit.addEventListener("click", function (e) {
    e.preventDefault();
    const guess = parseInt(userGuess.value);
    console.log(guess);
    validateGuess(guess);
  });
}

function validateGuess(guess) {
  if (isNaN(guess)) {
    displayMessage(`Please enter a valid number`)
  } else if (guess < 1) {
    displayMessage(`Please enter a number more then 1`);
  } else if (guess > 100) {
    displayMessage(`Please enter a number less then 100`);
  } else {
    prevGuess.push(guess);
    if (numGuess === 11) {
      displayGuess(guess);
      displayMessage(`Game Over Random Number was ${randomGuess}`);
      endGame();
    } else {
      displayGuess(guess);
      checkGuess(guess);
    }
  }
}

function checkGuess(guess) {
  if (guess === randomGuess) {
    displayMessage(`You guessed it right`);
    displayMessage(`Game Over Random Number was ${randomGuess}`);
    endGame();
  } else if (guess > randomGuess) {
    displayMessage(`Your Entered Number Too High`);
  } else if (guess < randomGuess) {
    displayMessage(`Your Entered Number is Too Low`);
  }
}

function displayGuess(guess) {
  userGuess.value = "";
  guessSlot.innerHTML += `${guess},   `;
  numGuess++;
  remaining.innerHTML = `${10 - numGuess}`;
}

function displayMessage(message) {
  lowOrHigh.innerHTML = `${message}`;
}

function endGame() {
  userGuess.value = '';
  userGuess.setAttribute('disabled', '');
  p.classList.add('button');
  p.innerHTML = `<h2 id="newGame">Start New Game</h2>`;
  startOver.appendChild(p)
  playGame = false;
  startGame();

}

function startGame() {
  const newGameButton = document.querySelector('#newGame')
  newGameButton.addEventListener('click', function (e) {
    randomGuess = Math.round(Math.random() * 100 + 1);
    prevGuess = []
    numGuess = 1
    guessSlot.innerHTML = ''
    remaining.innerHTML = `${11 - numGuess}`;
    userGuess.removeAttribute('disabled');
    startOver.removeChild(p)
    playGame = true;
  })
}