// <script type="text/javascript">

// These are the words for the Hangman game.

//Indicate if this is the first word the user is guessing. This isn't used in v1.0
var newGame = false;

// Keep track of wins and losses
var right = 0;
var wrong = 0;

// The number of questions to be asked;
var totalQuestions = 10;

//  Variables for the timer
var timerNumber = 10;
var intervalId;

// Array of objects to hold the questions
var game = [{"question" : "The principal creators of Unix",
    "correctAnswer" : "answer3",
    "answers": 
      ["Brian Kernighan and Bill Joy", 
      "Linus Torvalds and Bill Joy",
      "Ken Thompson and Dennis Ritchie",
      "Steve Jobs and Steve Wozniak" ],
    "info" : "Ritchie is also famous as the creator of the C programming language."},

    {"question" : "A well-known computer scientist who rose to the rank of Rear Admiral in the US Navy",
    "correctAnswer" : "answer1",
    "answers": 
      ["Grace Hopper", 
      "Horatio Nelson",
      "Jack Aubrey",
      "Chester Nimitz" ],
    "info" : "Among many accomplishments Grace Hopper led a team that created the first compiler for a programming language."},

    {"question" : "Created the Pascal Programming Language",
    "correctAnswer" : "answer2",
    "answers": 
      ["Blaise Pascal", 
      "Niklaus Wirth",
      "Dennis Ritchie",
      "Pedro Pascal" ],
    "info" : "Wirth named the programming language after Blaise Pascal"},

    {"question" : "Co-authors of Mosaic, a web browser that popularized the World Wide Web",
    "correctAnswer" : "answer1",
    "answers": 
      ["Marc Andreessen and Eric Bina", 
      "Larry Page and Sergey Brin",
      "Cameron and Tyler Winklevoss",
      "Mark Zuckerberg and Dustin Moskovitz" ],
    "info" : "Andreeson later co-founded Netscape."},

    {"question" : "Mathematician who invented the modern binary number system",
    "correctAnswer" : "answer3",
    "answers": 
      ["George Boole", 
      "Ahn Ahff",
      "Gottfried Leibniz",
      "William Hunting" ],
    "info" : "Not the inventor of binary notation, but George Boole is important to computer science (see Boolean Algebra)."},


    {"question" : "A polymath who contributed to computer science, physics, game theory, mathematics and who worked on The Manhattan Project.",
    "correctAnswer" : "answer4",
    "answers": 
      ["\"Manhattan\" Menzies", 
      "Alan Turing",
      "Ada Lovelace",
      "John von Neumann" ],
    "info" : "Considered by many to be one of the greatest geniuses of all time, he played a crucial role in formulating modern computer theory and architecture."},

    {"question" : "The principal creators of Unix",
    "correctAnswer" : "answer3",
    "answers": 
      ["Brian Kernighan and Bill Joy", 
      "Linus Torvalds and Bill Joy",
      "Ken Thompson and Dennis Ritchie",
      "Steve Jobs and Steve Wozniak" ],
    "info" : "Ritchie is also famous as the creator of the C programming language."}
    ];


$(".answer").click(function(){
    // alert("The paragraph was clicked.");
    if ((thisQuestion.correctAnswer) === ($(this).attr("id"))) {
      // alert("Right");
      // $($(this).attr("id")).text("right");
      $("#info").html("<div><bold>Correct!</bold>" + thisQuestion.info + "</div>");
      right++;
    }
    else {
      $("#info").html("<div><bold>Incorrect!</bold>" + thisQuestion.info + "</div>");
      // alert("wrong");
      wrong++;
    }
    stop();
});

// Timer functions
function runTimer() {
  intervalId = setInterval(decrement, 1000);
}

//  The decrement function.
function decrement() {

  //  Decrease number by one.
  timerNumber--;

  //  Show the number in the #show-number tag.
  $("#timer").html("<br>Time: " + timerNumber);
  // $("#timer").html("<a href='#tabs-1'>Countdown:</a><a href='#tabs-2'>" + number + "</a>");


  //  Once number hits zero...
  if (timerNumber === 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    $("#info").html("<div><bold>Time's up!</bold>" + thisQuestion.info + "</div>");
      // alert("wrong");
      wrong++;
    // alert("Time Up!");
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
  $("#main-area").html("Hi Miles");
    newGame = false;
}

function askQuestion() {
  var gameIndex = Math.floor((Math.random() * (game.length - 1) + 1));
  thisQuestion = game.splice( gameIndex, 1 )[0]; 

  document.getElementById("question").innerHTML = thisQuestion.question;
  
  $("#answer1").html("<div class='answers'>" + thisQuestion.answers[0] + "</div>");
  $("#answer2").html("<div class='answers'>" + thisQuestion.answers[1] + "</div>");
  $("#answer3").html("<div class='answers'>" + thisQuestion.answers[2] + "</div>");
  $("#answer4").html("<div class='answers'>" + thisQuestion.answers[3] + "</div>");
  runTimer();
  // for (i=0; i<thisQuestion.answers.length; i++) {
  //   // document.getElementById("answers").innerHTML += thisQuestion.answers[i];
  //   $("#answers").append("<div class='answers'>" + thisQuestion.answers[i] + "</div>");
  // }
}

// function timer() {
//   alert("timer");
// }


function setGame() {

  if (newGame === false) {
    askQuestion();
    
  }

  else {
    introRules();
  }
}


