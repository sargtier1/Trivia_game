// game variables

// Question and Answer Object
var array = [
    { 
    q: "What Year Did Wayne Gretzky Retire?", 
    a: "1999",
    o: ["1996", "1992", "1989", "1999"],
    },
    //------------------------//
    { 
    q: "Who Is The Richest video Game Streamer on Twitch?",
    a: "Ninja",
    o: ["Ninja", "shroud", "Dr Disrespect", "summit1g"],
    },
    //------------------------//
    {
    q: "What Is the Best Selling Video Game of All Time?",
    a: "Tetris",
    o: ["Minecraft","Tetris", "Grand theft Auto 5", "Wii Sports"],
    //------------------------//
    }
]

//variables that reference HTML
var displayTitle = $("#display-title"); // jumbotron for question display
var displayTitle2 = $("#display-title2");
var displayTitle3 = $("#display-title3")

var displayMain = $("#display-main");
var displayMain2 = $("#display-main2");
var displayMain3 = $("#display-main3");

var Choices = $("button"); 
var choice1 = $("#1");
var choice2 = $("#2");
var choice3 = $("#3");
var choice4 = $("#4");

var choice12 = $("#12");
var choice22 = $("#22");
var choice32 = $("#32");
var choice42 = $("#42");

var choice13 = $("#13");
var choice23 = $("#23");
var choice33 = $("#33");
var choice43 = $("#43");

var winCount = $("#wins"); // references win and loss counter
var lossCount = $("#losses");
var timeDisplay = $("#timer"); //references the timer

// variables for win and loss counter
var Wins = 0;
var Losses = 0;

// variables for other imoportant items
var timer;
var gameOver = false;
var timeExpire = false;
var questionAnswered;
var q2Answered;
var q3Answered;

// empty variable to store the selected question
var randomQuestions;
var intervalId;

// Starts game on the press of space bar
document.onkeypress = function gameStart(event){
    if (keyCode = 32){
        gameInit1();
    }
    else
        return;
    };

console.log(array);
console.log(Choices);
console.log("button");

// Creates function that initalizes teh game board
// not sure if this is possible but we will see
function gameInit1() {
    // sets up timer, and displays results
    questionAnswered = false;
    run();
    timer = 15;
    decrement();
    console.log(timer);

    // Display Questions
    displayTitle.text("The questions is: ");
    console.log("Question is: ");
    displayMain.text(array[0].q);
    console.log(array[0].q);

    displayTitle2.text("The questions is: ");
    console.log("Question is: ");
    displayMain2.text(array[1].q);
    console.log(array[1].q);

    displayTitle3.text("The questions is: ");
    console.log("Question is: ");
    displayMain3.text(array[2].q);
    console.log(array[2].q);


    // display answers for first question
    for (i = 0; i < array[0].o.length; i++) { 
        console.log(array[0].o[i]);
        choice1.text(array[0].o[0]);
        choice2.text(array[0].o[1]);
        choice3.text(array[0].o[2]);
        choice4.text(array[0].o[3]);
    }

    for (i = 0; i < array[1].o.length; i++) { 
        console.log(array[1].o[i]);
        choice12.text(array[1].o[0]);
        choice22.text(array[1].o[1]);
        choice32.text(array[1].o[2]);
        choice42.text(array[1].o[3]);
    }

    for (i = 0; i < array[2].o.length; i++) { 
        console.log(array[2].o[i]);
        choice13.text(array[2].o[0]);
        choice23.text(array[2].o[1]);
        choice33.text(array[2].o[2]);
        choice43.text(array[2].o[3]);
    }

    // display wins, and losses
    winCount.text(Wins);
    console.log(Wins);
    lossCount.text(Losses);
    console.log(Losses);

Choices.on("click", function() {

    console.log($(this).text());
    if ($(this).text() === array[0].a || $(this).text() === array[1].a || $(this).text() === array[2].a)  {
        Wins++;
        console.log(Wins);
    }
    else {
        Losses++;
    }
    if (timeExpire === true) {
        timeUp();
    }
});
};

function run() {
    clearInterval(intervalId);
    intervalId = setInterval(decrement, 1000);
  }

function decrement() {
    //  Decrease number by one.
    timer--;
    //  Show the number in the #show-number tag.
    timeDisplay.html("<p>" + timer + "</p>");
    console.log(timer);

    //  Once number hits zero...
    if (timer === -1) {
        //  ...run the stop function.
        stop();
        //  Alert the user that time is up.
        alert("Time Up!");
        // increses losses by one, then displays to user
        winCount.html(Wins);
        lossCount.html(Losses);
    }
}

function stop() {
    //  Clears our intervalId
    //  We just pass the name of the interval
    //  to the clearInterval function.
    clearInterval(intervalId);
  }

function GameReset () {
    wins = 0;
    loss = 0;
    //change jumbotron to "press space to begin"
};

function timeUp() {
    // in the element with an id of time-left add an h2 saying Time's Up!
    // console log done
    console.log("done");
    $("#timer").append("<h2>Time's Up!</h2>");
    console.log("time is up");
};






