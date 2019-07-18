//secret number creator
var secretNumber = 4;

//ask user to guess
var stringGuess = prompt("Guess a Number Between 1 and 10");
var guess = Number(stringGuess);

//check if guess is correct
if(guess === secretNumber){
    alert("YOU GOT IT RIGHT!!");
}
//check if number is higher
else if(guess > secretNumber){
    alert("Sorry, Too High!. Try Again");
}

else {
    alert("Sorry, Too Low. Try Again");
}
//otherwise, check if lower