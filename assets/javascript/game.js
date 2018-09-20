// game variables

// cleanest verison, need help building a web for this - keep running into little errors
var gameMeat = [
    { 
    q: "What Year Did Wayne Gretzky Retire?",
    a: "1999",
    o: ["1996", "1992", "1989"],
    },
    //------------------------//
    { 
    q: "Who Is The Richest video Game Streamer on Twitch?",
    a: "Ninja",
    o: ["shroud", "Dr Disrespect", "summit1g"],
    },
    //------------------------//
    {
    q: "What Is the Best Selling Video Game of All Time?",
    a: "Tetris",
    o: ["Minecraft", "Grand theft Auto 5", "Wii Sports"],
    //------------------------//
    }
]

//variables that reference HTML

var display; // jumbotron for question display
var ansToChose; // may need 4 of these but let me look into it, probsbly just one to reference the class, and a for loop to run the display
var winCont; // references win and loss counter
var losscont;
var timeDisplay; //references the timer


// variables for win and loss counter
var Wins = 0;
var Loses = 0;

// variables for other imoportant items
var Timer;
var gameOver = false;
var timeExpire = false;

// empty variable to store the selected question
var randomQuestions;

// Starts game on the press of space bar
var keyPressed = function gameStart(){
    if (keyCode = 32){
        gameInit();
    }
    else
        return;
    };

// Creates function that initalizes teh game board
// not sure if this is possible but we will see

function GameInit() {
    // set timer to 30 seconds
    timer = 3000;
    //make a math.random function that only selects the best a question from the question array and answers from array 

    //display question

    //display answers based of which question was chosen

    //display wins, and losses
};


// fucntion that reacts to mouse click
function Game (click) {
    // if click = answer then wins++, & gameOver = false, run game init for next question,

    // if click != answer then loss++, & gameOver = false, run game init for next question,

    // if timer = 0, then loss++, & gameOver = false, run game init for next question,

    // if all questions are answered display game over, display correct answer to each question, set gameOver = true, execute game reset function
};

function GameReset () {
    wins = 0;
    loss = 0;
    //change jumbotron to "press space to begin"
}




