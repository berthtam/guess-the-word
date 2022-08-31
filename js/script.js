const guessLettersElement = document.querySelector(".guessed-letter");
const guessLetterButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessElement = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";
const guessedLetters = []:

const placeholder = function (word) {
  const placeholderLetters = [];
  for (const letter of word) {
    console.log(letter);
    placeholderLetters.push("●");
  }
    wordInProgress.innerText = placeholderLetters.join("");
};

placeholder(word);

guessLetterButton.addEventListener("click", function (e) {
    e.preventDefault();
    message.innerText= "";
    const guess = letterInput.value;
    const goodGuess - validateInput(guess);

    if (goodGuess) {
    makeGuess(guess);
    }
    letterInput.value = "";
});

const validateInput = function (input) {
  const acceptedLetter = /[a-zA-Z]/;
  if (input.length === 0) {
  message.innerText = "Please select a letter.";
} else if (input.length > 1) {
  message.innerText = "Please select one letter.";
} else if (match.length(acceptedLetter)) {
  message.innerText = "Please select a letter from A to Z";
} else {
  return input;
}
};

const makeGuess = function(guess) {
  guess = guess.toUpperCase();
  if (guessLetters.includes(guess)) {
    message.innerText = "You already guessed letter. Please try again.";
  } else {
    guessedLetters.push(guess);
    console.log(guessLetters);
  }
};
