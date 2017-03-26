// <script type="text/javascript">

// These are the words for the Hangman game.

//Indicate if this is the first word the user is guessing. This isn't used in v1.0
var newGame = true;

// Keep track of wins and losses
var wins = 0;
var losses = 0;

//  Variables for the timer
var number = 10;
var intervalId;

// Array of objects to hold the questions
var game = [{"question" : "The principal creators of Unix",
    "correctAnswer" : 2,
    "answers": 
      ["Brian Kernighan and Bill Joy", 
      "Linus Torvalds and Bill Joy",
      "Brian Kernighan and Dennis Ritchie",
      "Steve Jobs and Steve Wozniak" ],
    "Info" : "Ritchie is also famous as the creator of the C programming language, which descended from Kernighan's B language."},

    {"question" : "A well-known computer scientist who rose to the rank of Rear Admiral in the US Navy",
    "correctAnswer" : 0,
    "answers": 
      ["Grace Hopper", 
      "Horatio Nelson",
      "Jack Aubrey",
      "Chester Nimitz" ],
    "Info" : "Among many accomplishments Grace Hopper led a team that created the first compiler for a programming language."},

    {"question" : "Created the Pascal Programming Language",
    "correctAnswer" : 3,
    "answers": 
      ["Blaise Pascal", 
      "Niklaus Wirth",
      "Dennis Ritchie",
      "Pedro Pascal" ],
    "Info" : "Wirth named the programming language after Blaise Pascal"},

    {"question" : "Co-authors of Mosaic, a web browser that popularized the World Wide Web",
    "correctAnswer" : 0,
    "answers": 
      ["Marc Andreessen and Eric Bina", 
      "Larry Page and Sergey Brin",
      "Cameron and Tyler Winklevoss",
      "Mark Zuckerberg and Dustin Moskovitz" ],
    "Info" : "Andreeson later co-founded Netscape."},

    {"question" : "Mathematician who invented the modern binary number system",
    "correctAnswer" : 2,
    "answers": 
      ["George Boole", 
      "Ahn Ahff",
      "Gottfried Leibniz",
      "William Hunting" ],
    "Info" : "Not the inventor of binary notation, but George Boole is important to computer science (see Boolean Algebra)."},


    {"question" : "A polymath who contributed to computer science, physics, game theory, mathematics and who worked on The Manhattan Project.",
    "correctAnswer" : 3,
    "answers": 
      ["\"Manhattan\" Menzies", 
      "Alan Turing",
      "Ada Lovelace",
      "John von Neumann" ],
    "Info" : "Considered by many to be one of the greatest geniuses of all time, he played a crucial role in formulating modern computer theory and architecture."},

    {"question" : "The principal creators of Unix",
    "correctAnswer" : 2,
    "answers": 
      ["Brian Kernighan and Bill Joy", 
      "Linus Torvalds and Bill Joy",
      "Brian Kernighan and Dennis Ritchie",
      "Steve Jobs and Steve Wozniak" ],
    "Info" : "Ritchie is also famous as the creator of the C programming language, which descended from Kernighan's B language."}
    ];


// for (var i = 0; i < myObj.cars.length; i++) {
//   document.getElementById("demo").innerHTML += "<p>" + myObj.cars[i]["question"] + " " + myObj.cars[i]["answer"] + "</p>";
// }

// Timer functions
function runTimer() {
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  number--;

  //  Show the number in the #show-number tag.
  $("#timer").html("<br>Time: " + number);
  // $("#timer").html("<a href='#tabs-1'>Countdown:</a><a href='#tabs-2'>" + number + "</a>");


  //  Once number hits zero...
  if (number === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    alert("Time Up!");
  }
}

//  The stop function
function stop() {

  //  Clears our intervalId
  //  We just pass the name of the interval
  //  to the clearInterval function.
  clearInterval(intervalId);
}


// Intro panel
function introRules(){
  alert("introRules");
}

function askQuestion() {
  var gameIndex = Math.floor((Math.random() * (game.length - 1) + 1));
  thisQuestion = game.splice( gameIndex, 1 )[0]; 

  document.getElementById("question").innerHTML = thisQuestion.question;
  
  $("#answer1").append("<div class='answers'>" + thisQuestion.answers[0] + "</div>");
  $("#answer2").append("<div class='answers'>" + thisQuestion.answers[1] + "</div>");
  $("#answer3").append("<div class='answers'>" + thisQuestion.answers[2] + "</div>");
  $("#answer4").append("<div class='answers'>" + thisQuestion.answers[3] + "</div>");
  // for (i=0; i<thisQuestion.answers.length; i++) {
  //   // document.getElementById("answers").innerHTML += thisQuestion.answers[i];
  //   $("#answers").append("<div class='answers'>" + thisQuestion.answers[i] + "</div>");
  // }
}

function timer() {
  alert("timer");
}


function setGame() {

  // If this isn't the first round, pause to show the answer before overwriting.
   // if (newGame === false) {
   //   document.getElementById("playAgain").innerHTML = ("PRESS ANY KEY TO PLAY AGAIN");
   //   newGame = true;
   // }

  // Randomly pick a word and take it out of the array so it won't be used again
  

  askQuestion();
  runTimer();
  // blankWord = thisWord;

  // Set the guesses back to starting values
  guessCount = 15;
  guessedLetters = "";


  // document.getElementById("blanks").innerHTML = ("This word is " + thisWord);
  // blankWord = setToBlanks(blankWord);
  
  // document.getElementById("playAgain").innerHTML = ("");
  // writeBlanks(blankWord);
}


// When the user presses a key, put that letter into blankWord (the underscores section of the game)
//
// finally, check to see if the game is complete by checking to see if any blanks are left!
blankWord = document.onkeyup = function() {

  // Get key input from the user
  var userguess = String.fromCharCode(event.keyCode).toUpperCase();
  // if (newGame === false) {
  //   document.getElementById("playAgain").innerHTML = ("PRESS ANY KEY TO PLAY AGAIN");
  //   newGame = true;
  // }
  // Test if the character is valid and if it was entered previously
  if ((guessedLetters.indexOf(userguess) === -1) && (userguess.match(/^[A-Za-z]+$/))) {
    guessedLetters += userguess;

    // If the letter guessed isn't in the word, the user gets one less guess.
    if(thisWord.indexOf(userguess) === -1){
      guessCount--;
    }
    
    // newGame = true;
  }
  
  // Show the user the guesses so far
  document.getElementById("characterGuesses").innerHTML = (guessedLetters);


  // console.log(userguess);
  // console.log(words[1][2]);

  for (var i = 0; i < thisWord.length; i++) {
    if (thisWord[i] === userguess) {
      blankWord = blankWord.replaceAt(i, userguess);
    }
  }


// This function from stackoverflow to replace a character in a string based on its index.
// I intend to replace this with different logic, because I don't think it is ideal.
String.prototype.replaceAt=function(index, character) {
    return this.substr(0, index) + character + this.substr(index+character.length);
}

  // var wordsIndex = Math.floor((Math.random() * (words.length - 1) + 0));

  // var thisWord = words.splice( wordsIndex, 1 )[0]; 

  //document.getElementById("blanks").innerHTML = (blankWord);



  // If no blanks are left, the reset the game!
  if (blankWord.indexOf("_") === -1) {
    
    document.getElementById("blanks").innerHTML = (thisWord);

    document.getElementById("theAnswer").innerHTML = ("Solved! The answer is " + thisWord);

    alert("Solved! The answer is " + thisWord);
    wins++;
    document.getElementById("wins").innerHTML = ("Wins: " + wins);
    // blankWord = setToBlanks(blankWord);
    document.getElementById("characterGuesses").innerHTML = "";
    // newGame = false;
    setGame();
  }
  else if (guessCount === 0) {
    document.getElementById("guesses").innerHTML = ("Off with your head!");
    document.getElementById("blanks").innerHTML = (thisWord);
    document.getElementById("theAnswer").innerHTML =("You have run out of guesses! The answer was " + thisWord);
    // newGame = false;
    alert("No guesses left! The answer was " + thisWord);
    losses++;
    document.getElementById("losses").innerHTML = ("Losses: " + losses);
    // blankWord = setToBlanks(blankWord);
    document.getElementById("characterGuesses").innerHTML = "";
    setGame();    
  }
  else {
    document.getElementById("blanks").innerHTML = (blankWord);
  }



  
  if (guessCount === 1 ) {
    document.getElementById("guesses").innerHTML = ("You only have 1 guess left!");
  }
  else {
    document.getElementById("guesses").innerHTML = ("You have " + guessCount + " guesses remaining.");
  }

  
  // alert(guessCount);
  return blankWord;

}

function writeBlanks(word) {
  document.getElementById("blanks").innerHTML = (word);
}

// This function takes a string as a parameter and returns a string made up of an underscore for each character in 
// the string. It returns a space for a space or a dash for a dash.
function setToBlanks(word) {
  var blanks = "_";
  for (var i = 1; i < word.length; i++) {
    if (word[i] === " ") {
      blanks += " ";
    }
    else if (word[i] === "-") {
      blanks += "-";
    }
    else {
      blanks += "_";
    }

  }
  return blanks;

}
