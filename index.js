  var readl = require('readline-sync');
//const chalk = require('chalk');
var score = 0;
var userName = readl.question("What is your name? ");
console.log("Welcome " + userName + " this is a quiz to find out how well do you know Aryan?");
console.log("To register your answer please type only a, b, or c from the options given below.");
console.log("Let's begin!");


function play(question,answer) {
  var userAnswer = readl.question(question);
  
  if (userAnswer.toLowerCase() === answer.toLowerCase()){
    console.log("Right! answer");
    score = score + 1;
  } else {
    console.log("Wrong! answer");
    score = score;
  }
}


var questions = [{
  question: `Where does Aryan live? 
  a : Gujarat
  b : delhi
  c : maharastra
  `,
  answer:"a"
}, {
  question: `What is Aryan's favourite fastfood? 
  a : Burger
  b : Pizza
  c : Momo
  `,
  answer:"b"
}, {
  question: `Which game does Aryan play most? 
  a : Mobile Legend
  b : Pubg
  c : SimCity
  `,
  answer:"b"
},
{
  question: `Which brand phone does Aryan have?
  a : Oneplus
  b : iPhone
  c : Samsung
  `,
  answer:"c"
},
{
  question: `Who is Aryan programming teacher?
  a: Javed Jaffrey
  b: Tanay Pratap
  c: Gulshan Grover
  
  `,
  answer: "b"
}
]


for (var i = 0; i < questions.length; i++)
{
var currentQuestion = questions[i];
play(currentQuestion.question, currentQuestion.answer)
console.log("Current Score", score);
console.log("-------------------");
}
console.log("YAY! you scored:", score);
