function pickWord(){
  var words = ["audi", "bmw", "mersedes", "opel"];
  return words[Math.floor(Math.random() * words.length)];
}; //random word

function setupAnswerArray(word){
  var answerArray = [];
  for (var i = 0; i < word.length; i++) {
        answerArray[i] = "_";
  };
  return answerArray;
}; // Забитый массив _

function showPlayerProgress(answerArray) {
  return alert(answerArray.join(" "));
}

function getGuess (){
  return prompt("Enter leters");
};

function updateGameState(word, guess, answerArray){
  var appearances = 0;
  for (var j = 0; j < word.length; j++) {
      if (word[j] === guess) {
        answerArray[j] === guess;
        appearances++;
      };
  };
  return appearances;
};

var word = pickWord();
var answerArray = setupAnswerArray(word);
var remainingLetters = word.length;
var guess = getGuess();


while (remainingLetters > 0) {
    showPlayerProgress(answerArray);
    var guess = getGuess();
    if (guess === null) {
      break;
    } else if (guess.length !== 1) {
      alert("Enter one book");
    } else {
      var correctGuesses = updateGameState(word, guess, answerArray);
      remainingLetters-= correctGuesses;
    };
};

if (guess === null) {
  alert("Bue");
} else {
  alert("Great this word is " + word);
};
