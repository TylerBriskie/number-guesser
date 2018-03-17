
var guess = document.getElementById("guess")
var answer = getRandomAnswer(10);

function submitGuess(){
    event.preventDefault();
    var guess = document.getElementById("guess");
    if (parseInt(guess.value) == answer){
      var result = document.getElementById("last-guess");
      result.innerHTML = "Correct!";
      result.innerHTML += "<p>" + answer + " was the correct answer </p>";
    } else {
      var result = document.getElementById("last-guess");
      result.innerHTML = guess.value;
      result.innerHTML += "<p>Wrong.  Guess Again.</p>"
    }
  }


function getRandomAnswer(max){
  return Math.floor(Math.random()*max+1);
}
