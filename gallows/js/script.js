//Функция случайного слова
function pickWord() {
  var words = ["audi", "bmw", "mersedes", "opel"];
  return words[Math.floor(Math.random() * words.length)];
};
//Заполняем массив случайного слова "_" и возвращ строку массив
function setupAnswerArray(word){
  var emtyArray = [];
  for (var i = 0; i < word.length; i++) {
    emtyArray[i] = "_";
  }
  return emtyArray.join();
};
//Выводит состояние игры
function showPlayerProgress(condition) {
  return alert(condition);
}
//Вводит букву
function getGuess() {
  return  prompt("Угадывайте букву, или нажимай отмена для выхода");
}
//обновляет массив согласно даным игрока
function updateGameState(guess, word, answerArray) {
  for (var i = 0; i < word.length; i++) {
    if ( word[i] === guess) {
      answerArray[i] = guess;
    };
  };
  return guess.length;
};
//вывод с поздравлением
function showAnswerAndCongratulatePlayer(answerArray) {
  alert("Great! this word is " + answerArray.join);
};


var word = pickWord();
//случайное слово
var answerArray = setupAnswerArray(word);
 //колличество не угаданых букв
var remainingLetters = word.length;
//колличество букв которое осталось угадать

while (remainingLetters > 0) {
  showPlayerProgress(answerArray);
  var guess = getGuess();
  if (guess === null) {
    break;
  } else if (guess.length !== 1) {
    alert("Введите одну букву");
  } else {
    var correctGuesses = updateGameState(guess, word, answerArray);
    remainingLetters -= correctGuesses;
  };
};
 showAnswerAndCongratulatePlayer(answerArray);

//
//
//
//
// if (guess === null) {
//   alert("Good buy");
// } else {
//   alert(answerArray);
//   alert("Great, it is word " + rword);
// }
