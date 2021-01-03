let lowerInput = 1;
let HigherInput = 10;
let correct_ans = Math.floor(Math.random() * HigherInput + lowerInput);
console.log(correct_ans);

for (i = 0; i < 3; i++) {
  let userGuess = prompt("Please Enter a Number Between 1 to 10");
  userGuess = parseInt(userGuess);
  if (userGuess === correct_ans) {
    alert("You Win !!");
    i = 3;
  } else if (userGuess < correct_ans) {
    alert("Correct Answer is Greater");
  } else {
    alert("Correct Answer is Smaller");
  }
  if (i == 2 && userGuess != correct_ans) {
    alert("You Loose");
  }
}
