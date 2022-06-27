let prompt = require("prompt-sync")();
let answer = Math.ceil(Math.random() * 10);
let guess = prompt("Guess a number: ");
guess = Number(guess);
let previousGuess;

for(let i = 0; i < 100; i++){
  if(isNaN(guess) === true){
    i--;
    console.log("Not a number! Try again!");
    previousGuess = guess;
    guess = prompt("Guess a number: ");
    guess = Number(guess);
  } else if(guess === previousGuess){
    i--;
    console.log("Already Guessed!");
    previousGuess = guess;
    guess = prompt("Guess a number: ");
    guess = Number(guess);
  } else if(guess < answer){
    console.log("Too Low!");
    previousGuess = guess
    guess = prompt("Guess a number: ");
    guess = Number(guess);
  } else if(guess > answer){
    console.log("Too High!");
    previousGuess = guess
    guess = prompt("Guess a number: ");
    guess = Number(guess);
  } else if(guess === answer){
    console.log("You got it! You took " + (i+1) + " attempts!");
    break;
  }
};


