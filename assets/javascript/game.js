// game variables

// Question and Answer Object
var gameMeat = [
    { 
    q: "What Year Did Wayne Gretzky Retire?",
    a: "1999",
    o: ["1996", "1992", "1989", "1999"],
    },
    //------------------------//
    { 
    q: "Who Is The Richest video Game Streamer on Twitch?",
    a: "Ninja",
    o: ["shroud", "Dr Disrespect", "summit1g", "Ninja"],
    },
    //------------------------//
    {
    q: "What Is the Best Selling Video Game of All Time?",
    a: "Tetris",
    o: ["Minecraft", "Grand theft Auto 5", "Wii Sports", "Tetris"],
    //------------------------//
    }
]

//variables that reference HTML
var displayTitle = $("#display-title"); // jumbotron for question display
var displayMain = $("#display-main");
var ansToChose = $(".list-group-item"); 
var choice1 = $("#1");
var choice2 = $("#2");
var choice3 = $("#3");
var choice4 = $("#4");
var winCount = $("#wins"); // references win and loss counter
var lossCount = $("#losses");
var timeDisplay = $("#timer"); //references the timer

// variables for win and loss counter
var Wins = 0;
var Losses = 0;

// variables for other imoportant items
var timer;

setTimeout(timeUp, 1000 * 30);
while(timer > 1) {
    setTimeout(function(){
        timer--;
    }, 1000)
}

var gameOver = false;
var timeExpire = false;
// empty variable to store the selected question
var randomQuestions;

// Starts game on the press of space bar
document.onkeypress = function gameStart(event){
    if (keyCode = 32){
        gameInit1();
    }
    else
        return;
    };

// Creates function that initalizes teh game board
// not sure if this is possible but we will see
function gameInit1() {
    // set timer to 30 seconds
    timer = 30;
    // Display timer
    timeDisplay.text(":" + timer);

    // Display Question
    displayTitle.text("Question 1: ");
    console.log("Question 1: ");
    displayMain.text(gameMeat[0].q);
    console.log(gameMeat[0].q);

    // display answers for first question
    for (i = 0; i < gameMeat[0].o.length; i++) { 
        console.log(gameMeat[0].o[i]);
        choice1.text(gameMeat[0].o[0]);
        choice2.text(gameMeat[0].o[1]);
        choice3.text(gameMeat[0].o[2]);
        choice4.text(gameMeat[0].o[3]);
    
    }
    
    // display wins, and losses
    winCount.text(Wins);
    console.log(Wins);
    lossCount.text(Losses);
    console.log(Losses);
};

// fucntion that reacts to mouse click
ansToChose.on("click", function() {
    if (ansToChose === gameMeat[0].a && gameOver === false) {
        Wins++;
        // run function for q two
    }
    if (ansToChose !== gameMeat[0].a  && gameOver === false) {
        Losses++;
        //run function for q2
    }
    if (timeExpire === true) {
        losses++;
        timeUp();
    }
});

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


