// console.log("test");

//setting up variables here
var userScore = 0;
var computerScore = 0;

//caching the DOM
const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("comp-score");
const scoreBoard_div = document.querySelector(".scoreBoard");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const scissor_div = document.getElementById("s");
const paper_div = document.getElementById("p");
const resetButton_p = document.getElementById("reset-button");

// create a random choice for the computer
// need to get what the user has clicked
// compare this to what the computer has picked
// create a result for win or loss
// use the result comparison to update the scoreBoard
//     and to update the color of score board border
//     and to update the color of the user or comp badge
//     and to update the result text
function getComputerChoice() {
    const choices = ['r', 'p', 's']; //setting the options for computer choices
    const randomNumber = Math.floor(Math.random() * 3); //selecting a random number between 0 & 2 to assign to choices
    return choices[randomNumber]; //returning the computer choice
}


//upates the HTML elements to alert the player to a win, and update the score
function win() {
    scoreBoard_div.style.border = "3px solid green";
    result_div.innerHTML = "You have won!";
    userScore++;
    userScore_span.innerHTML = userScore;
}

//updates the HTML elements to alert the player to a loss, and update the score
function lose() {
    scoreBoard_div.style.border = "3px solid red";
    result_div.innerHTML = "You have lost!";
    computerScore++;
    computerScore_span.innerHTML = computerScore;
}

//updates the HTML elements to alert the player to a draw, no update to score
function draw() {
    scoreBoard_div.style.border = "3px dotted black";
    result_div.innerHTML = "It is a draw!";
}

//gives the user the option to reset the game without needing a refresh of the page
function reset() {
    userScore = 0;
    computerScore = 0;
    scoreBoard_div.style.border = "3px solid white";
    result_div.innerHTML = "Shall we begin?";
    computerScore_span.innerHTML = computerScore;
    userScore_span.innerHTML = userScore;
}

function game(userChoice) {
    const computerChoice = getComputerChoice(); //storing computers choice
    switch (userChoice + computerChoice) {
        case "pr":
        case "sp":
        case "rs":
            win();
            break;
        case "rp":
        case "ps":
        case "sr":
            lose();
            break;
        case "rr":
        case "pp":
        case "ss":
            draw();
            break;
    }

}

function main() {
    //creating a listener on the rock_div element for user clicks
    rock_div.addEventListener('click', function () {
        game("r");
    })

    //creating a listener on the scissor_div element for user clicks
    scissor_div.addEventListener('click', function () {
        game("s");
    })


    //creating a listener on the paper_div element for user clicks
    paper_div.addEventListener('click', function () {
        game("p");
    })

    resetButton_p.addEventListener('click', function() {
        reset();
    })
}


main();