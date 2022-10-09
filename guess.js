let numberToGuess = Math.floor(Math.random() * 20 + 1);

function processGuess() {
  let guess = Number(document.getElementById("guess").value);
  let message = document.getElementById("message");

  if (guess == numberToGuess) {
    message.innerHTML = "You got it!!";
  } else if (guess > numberToGuess) {
    message.innerHTML = "No, try a lower number";
  } else if (guess < numberToGuess) {
    message.innerHTML = "No, try a higher number.";
  }
}
