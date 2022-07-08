const guessList = document.querySelector(".guessed-letter");
const guessButton = document.querySelector(".guess");
const letterInput = document.querySelector(".letter");
const wordInProgress = document.querySelector(".word-in-progress");
const remainingGuessElement = document.querySelector(".remaining");
const remainingGuessSpan = document.querySelector(".remaining span");
const message = document.querySelector(".message");
const playAgainButton = document.querySelector(".play-again");

const word = "magnolia";

const placeholder = function(word) {
  const placeholderLetters = "●";
  for (const letter of word){
    console.log(letter);
    placeholderLetters.push("●");
  }
    wordInProgress.innerText= placeholderLetters.join("●");
};

addGuessButton.addEventListener("click", function(){
    e.preventDefault();
    var guess = input.value;
    console.log(guess);
    letterInput.value = "";
});
