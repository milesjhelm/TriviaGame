// <script type="text/javascript">

// These are the words for the Hangman game.

//Indicate if this is the first word the user is guessing. This isn't used in v1.0
var newGame = true;

// Keep track of wins and losses
var right = 0;
var wrong = 0;

// Make sure user can only choose one answer.
var firstAnswer = true;

// The number of questions to be asked;
var totalQuestions = 2;

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
    "info" : "Ken Thompson and Dennis Ritchie. Ritchie is also famous as the creator of the C programming language."},

    {"question" : "A well-known computer scientist who rose to the rank of Rear Admiral in the US Navy",
    "correctAnswer" : "answer1",
    "answers": 
      ["Grace Hopper", 
      "Horatio Nelson",
      "Jack Aubrey",
      "Chester Nimitz" ],
    "info" : "Grace Hopper. Among many accomplishments Grace Hopper led a team that created the first compiler for a programming language."},

    {"question" : "Created the Pascal Programming Language",
    "correctAnswer" : "answer2",
    "answers": 
      ["Blaise Pascal", 
      "Niklaus Wirth",
      "Dennis Ritchie",
      "Pedro Pascal" ],
    "info" : "Niklaus Wirth. Wirth named the programming language after Blaise Pascal"},

    {"question" : "Co-authors of Mosaic, a web browser that popularized the World Wide Web",
    "correctAnswer" : "answer1",
    "answers": 
      ["Marc Andreessen and Eric Bina", 
      "Larry Page and Sergey Brin",
      "Cameron and Tyler Winklevoss",
      "Mark Zuckerberg and Dustin Moskovitz" ],
    "info" : "Marc Andreessen and Eric Bina. Andreeson later co-founded Netscape."},

    {"question" : "Mathematician who invented the modern binary number system",
    "correctAnswer" : "answer3",
    "answers": 
      ["George Boole", 
      "Ahn Ahff",
      "Gottfried Leibniz",
      "William Hunting" ],
    "info" : "Gottfried Leibniz. George Boole was not the inventor of binary notation, but he is important to computer science (see Boolean Algebra)."},


    {"question" : "A polymath who contributed to computer science, physics, game theory, mathematics and who worked on The Manhattan Project.",
    "correctAnswer" : "answer4",
    "answers": 
      ["\"Manhattan\" Menzies", 
      "Alan Turing",
      "Ada Lovelace",
      "John von Neumann" ],
    "info" : "John von Neumann. Considered by many to be one of the greatest geniuses of all time, he played a crucial role in formulating modern computer theory and architecture."},

    {"question" : "Designed a programmable mechanical computer in the 19th century",
    "correctAnswer" : "answer4",
    "answers": 
      ["George Boole", 
      "James Clerk Maxwell",
      "Bill Gates",
      "Charles Babbage" ],
    "info" : "Charles Babbage. His most complex designs have yet to be built."},


    {"question" : "Invented the relational database",
    "correctAnswer" : "answer1",
    "answers": 
      ["Ted Codd", 
      "James Watson",
      "Larry Ellison",
      "Jean-Auguste-Dominique Ingres" ],
    "info" : "Edgar Frank \"Ted\" Codd worked for IBM when he devised the model, but Larry Ellison founded Oracle based on the relational database model."},

    {"question" : "Nickname given to a group of employees who left Shockley Semiconductor to found Fairchild Semiconductor",
    "correctAnswer" : "answer4",
    "answers": 
      ["The Mercury Seven", 
      "The Silicon Seven",
      "The Hateful Eight",
      "The Traitorous Eight" ],
    "info" : "The Traitorous Eight. Many of the people involved in Fairchild Semiconductor went on to found other companies, including Intel and AMD."},


    {"question" : "Conceived an algorithm for finding the shortest paths between nodes in a graph",
    "correctAnswer" : "answer3",
    "answers": 
      ["Adriaan van Wijngaarden", 
      "Johan van der Smut",
      "Edsger Wybe Dijkstra",
      "Niklaus Wirth" ],
    "info" : "Edsger Wybe Dijkstra. The algorithm is called \"Dijkstra's Theorem.\""},


    {"question" : "Kenneth E. Iverson named the programming language APL as an acronym for...",
    "correctAnswer" : "answer2",
    "answers": 
      ["Aligned Process Launcher", 
      "A Programming Language",
      "Asynchronous Pneumatic Larder",
      "Arranged Preprocessor Loading" ],
    "info" : "A Programming Language. APL's central datatype is the multidimensional array."},
    
    {"question" : "Wrote the vi editor with legendary speed",
    "correctAnswer" : "answer4",
    "answers": 
      ["Andre Roussimoff", 
      "John von Neumann",
      "Konrad Zuse",
      "Bill Joy" ],
    "info" : "Bill Joy. He went on to co-found Sun Microsystems."},


    {"question" : "The principal creators of Unix",
    "correctAnswer" : "answer3",
    "answers": 
      ["Brian Kernighan and Bill Joy", 
      "Linus Torvalds and Bill Joy",
      "Ken Thompson and Dennis Ritchie",
      "Steve Jobs and Steve Wozniak" ],
    "info" : "Ken Thompson and Dennis Ritchie. Ritchie is also famous as the creator of the C programming language."}
    ];

// This array of integers is used to keep track of which questions have been asked.
// If the user decides to play the game again, the questions will be drawn from the same overall
// pool of questions, but they won't have all the same questions and the questions won't come in
// the same order.
var questionsIndex;
function setQuestionsIndex() {
  for (var i = 0; i < game.length; i++);
}



$(".answer").click(function(){


    // alert("The paragraph was clicked.");
    if (firstAnswer === true) {
      if ((thisQuestion.correctAnswer) === ($(this).attr("id"))) {
        // alert("Right");
        // $($(this).attr("id")).text("right");
        $("#info").html("Correct! " + thisQuestion.info + "</div>");
        right++;
        totalQuestions--;
        setTimeout(function(){ askQuestion(); }, 9000);
      }
      else {
        $("#info").html("Incorrect! The correct answer is " + thisQuestion.info + "</div>");
        setTimeout(function(){ askQuestion(); }, 9000);
        // $(this).css("color", "red");
        wrong++;
        totalQuestions--;

      }
      firstAnswer = false;
      stop(); 
    }


    // if (totalQuestions <= 0) {
    //   showScore();
    //  }

   
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
  $("#timer").html("Timer: " + timerNumber);
  // $("#timer").html("<a href='#tabs-1'>Countdown:</a><a href='#tabs-2'>" + number + "</a>");


  //  Once number hits zero...
  if (timerNumber <= 0) {

    //  ...run the stop function.
    stop();

    //  Alert the user that time is up.
    $("#info").html("Time's up! The answer is " + thisQuestion.info + "</div>");
    setTimeout(function(){ askQuestion(); }, 9000);
    wrong++;
    totalQuestions--;
    timerNumber = 10;
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
  $("#introRules").html("Test your knowledge of those who advanced computers and their applications.");
  newGame = false;
  setTimeout(function(){ $("#introRules").hide(); }, 7000);
  setTimeout(function(){ $("#introRules").html("Get ready, you only have a few<br>seconds for each question!"); }, 7700);
  setTimeout(function(){ $("#introRules").show(); }, 7701);
  // $("#introRules").html("Get ready");
  setTimeout(function(){ $("#introRules").hide(); }, 12000);
  setTimeout(function(){ askQuestion(); }, 13000);
}

function showScore() {

  $("#question").hide();
  $("#answer1").hide();
  $("#answer2").hide();
  $("#answer3").hide();
  $("#answer4").hide();
  $("#timer").hide();
  $("#info").hide();

  $("#results").html("Finished!<br>" +
    "You scored " + right + " out of " + (right + wrong) +
    "<br><br>Get ready to play again!"
    );
  $("#results").show()
  totalQuestions = 10;
  setTimeout(function(){ $("#results").hide(); }, 7000);
  setTimeout(function(){ setGame(); }, 7000);

}

function askQuestion() {

  if (totalQuestions <= 0) {
    showScore();
  }

  else {
    firstAnswer = true;
    timerNumber = 10;
    var gameIndex = Math.floor((Math.random() * (game.length - 1) + 1));
    thisQuestion = game.splice( gameIndex, 1 )[0]; 

    document.getElementById("question").innerHTML = thisQuestion.question;

    // $("#main-area").css("color", "#994d00")
    $("#question").show();
    $("#answer1").show();
    $("#answer2").show();
    $("#answer3").show();
    $("#answer4").show();
    $("#timer").show();
    $("#info").show();

    
    $("#answer1").html("<div class='answers'>" + thisQuestion.answers[0] + "</div>");
    $("#answer2").html("<div class='answers'>" + thisQuestion.answers[1] + "</div>");
    $("#answer3").html("<div class='answers'>" + thisQuestion.answers[2] + "</div>");
    $("#answer4").html("<div class='answers'>" + thisQuestion.answers[3] + "</div>");
    $("#timer").html("Timer: 10");
    $("#info").html("");
    runTimer(); 
  }

}

function setGame() {

  $("#results").hide()

  if (newGame === false) {
    askQuestion();
  }

  else {
    setQuestionsIndex();
    introRules();    
  }
}
