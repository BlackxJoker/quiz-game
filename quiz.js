var readlineSync = require('readline-sync');
var score = 0;
var highScore  = [];
var userName = readlineSync.question("May i have your name ?: ");
console.log("welcome  " + userName);
console.log("Let's play the game Do You Know Arnav");
console.log("🤗🤗🤗🤗🤗🤗");


// function to play the game
function play(question, answer) {
  var userAnswer = readlineSync.question(question);
  if (userAnswer === answer) {
    score = score + 1;
  }
}

var questions = [{
  question: "Where's my favourite place : ",
  answer: "gaya"
},
{
  question: "What's my favourite food : ",
  answer: "momo"
},
{
  question: "Who's my crush : ",
  answer: "Katherine Langford"
},
{
  question: "who's my best person : ",
  answer: "grandfather"
},
{
  question: "Who's my favourite actor : ",
  answer: "irfan khan"
},
{
  question: "Who I really want to meet someday : ",
  answer: "tanay pratap"
}];

for (var i = 0; i < questions.length; i++) {
  var currentQuestion = questions[i];
  play(currentQuestion.question, currentQuestion.answer);
}
console.log("Your score is : ", score);
console.log("---------------");
function showScore() {
  if (score >= 4) {
    console.log("YAY...! You are my best pal..🥳");
  }
  else {
    console.log("You don't know me..🥲!");
  }
}
showScore();
highScore.push(score);