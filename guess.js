// HTML elements to change
let message = document.getElementById("message");
let numberToGuessMessage = document.getElementById("numberToGuessMessage");

// Get Max number from user
let maxNumber = Number(prompt("What should the maximum number to guess be?"));
while (isNaN(maxNumber) || maxNumber <= 0) {
  maxNumber = Number(prompt("Please input a valid number."));
}
maxNumber = Math.round(maxNumber);

numberToGuessMessage.innerHTML = `Guess a number between 1 and ${maxNumber}`;

let numberToGuess = Math.floor(Math.random() * maxNumber + 1);

let guesses = [];
function processGuess() {
  let gameOver = false;
  let guess = Number(document.getElementById("guess").value);

  if (isNaN(guess)) {
    message.innerHTML = "That is not a number! Please try again.";
  } else if (guess > maxNumber || guess < 1) {
    message.innerHTML = `Not in range! Make sure to guess a number between 1 and ${maxNumber}`;
  } else if (guesses.includes(guess)) {
    message.innerHTML =
      "That number has already been guessed! Please Try again.";
  } else if (guess == numberToGuess) {
    guesses.push(guess);
    message.innerHTML = "You got it!!";
    gameOver = true;
  } else if (guess > numberToGuess) {
    guesses.push(guess);
    message.innerHTML = "Too high, try a lower number.";
  } else if (guess < numberToGuess) {
    guesses.push(guess);
    message.innerHTML = "Too low, try a higher number.";
  }

  if (gameOver) {
    if (guesses.length == 1) {
      message.innerHTML += ` It took you 1 try and your guess was ${guess}.`;
    } else {
      message.innerHTML += ` It took you ${
        guesses.length
      } tries and your guesses were ${guesses.join(", ")}.`;
    }
  }
}
