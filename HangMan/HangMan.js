"use strict";

let attempt = 10;
let guesses = [];

//Array of words to choose from
const wordArr = [
  "Bootcamp",
  "Programming",
  "Gaming",
  "Scubadiving",
  "AppleSeed",
  "Bulgaria",
  "Amazon",
];

function splash() {
  figlet("Hang-Man", { font: "Ghost" }, function (err, data) {
    if (err) {
      console.log("Something went wrong...");
      console.dir(err);
      return;
    }
    console.log(data);
  });
}

function checkIfWon(text, arr) {
  if (text === displayAsteriks(text, arr)) {
    return true;
  }
  return false;
}

// Function that checks validation of input
function isValidInput(guess) {
  if (guess.length > 1 || !/[a-z]/.test(guess)) {
    console.error("Please enter only one character\n");
    return false;
  }
  return true;
}

// Function that display the word as asteriks
function displayAsteriks(text, arr) {
  let astrix = "";
  for (let i = 0; i < text.length; i++) {
    if (arr.includes(text[i])) {
      astrix += text[i];
    } else {
      astrix += "*";
    }
  }
  return astrix;
}

function startNewGame() {
  // Create a random choice from the wordArr
  let randomWord =
    wordArr[Math.floor(Math.random() * wordArr.length)].toLowerCase();

  var isWon = false;

  while (attempt) {
    let chosenWord = displayAsteriks(randomWord, guesses);

    console.log(`You have ${attempt} guesses
    The word is:
    ${chosenWord}`);

    console.log("What is your guess?\n");

    let guess = prompt();

    if (guess) {
      guess = guess.toLowerCase();

      console.log(guess);

      if (isValidInput(guess)) {
        if (randomWord.includes(guess)) {
          guesses.push(guess);
        } else {
          attempt--;
        }
      }
    }

    if (checkIfWon(randomWord, guesses)) {
      isWon = true;
      break;
    }
  }

  if (isWon) {
    console.log("Congratulations! You Won!");
  } else {
    console.log("Out of attempts.\nGoodluck next time!");
  }
  setTimeout(() => window.close(), 1000);
}

alert("Open the console before pressing Ok...");
splash();
setTimeout(() => startNewGame(), 1000);
