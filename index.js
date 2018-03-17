
var guess = document.getElementById("guess")
var answer = getRandomAnswer(10);
console.log(answer);

function submitGuess(){
    event.preventDefault();
    var guess = document.getElementById("guess");
    if (parseInt(guess.value) == answer){
      var result = document.getElementById("last-guess");
      result.innerHTML = "Correct!";
    } else {
      var result = document.getElementById("last-guess");
      result.innerHTML = guess.value;
      result.innerHTML += "<p>Wrong.  Guess Again.</p>"
    }
  }


function getRandomAnswer(max){
  return Math.floor(Math.random()*max+1);
}
