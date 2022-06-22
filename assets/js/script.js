//Declare variables needed
let battleshipRandom = Math.floor(Math.random()* 4)+1; // Create a random selection for where that battleship will go
let location1 = battleshipRandom;
let location2 = location1 + 1;   //3 varibales in which the computers ship will reside
let location3 = location2 + 1;
let guess;    // A variable to hold the users guess
let hits = 0;  // A variable to hold the hits 
let guesses = 0;
let isSunk = "false";
let stats;

// attached a variable to a HTML element
const startBtn = document.getElementById("start");

//Create and event listener
startBtn.addEventListener("click",start);
 
//Create and event listener
function start() {
   
}
// when a cell is clicked, it checks if the ship is there and updates the score if it is
while (isSunk == "false") {
    guess = prompt("Enter new target location");   // Add prompt to user to enter a location
    if (guess < 1 || guess > 7) {                  // Ensure that the the info entered into prompt refers to a true location
            alert("Please enter a valid cell number");  // alert the user to enter a valid cell location
    } else {
        guesses = guesses + 1;    // if a location is entered a guess score is added
    if (guess == location1 || location2 || location3) {   // user location is checked with each of the 3 computers locations
            alert("Target hit");
            hits = hits + 1;
    if (hits == 3) {
            isSunk = ture;
            alert("You sank my battleship!"); 
     // alert if it is a sucessful attempt by the user
    } else {

        alert("Target missed, Try again");  /// alert if attempt was not sucessul
    }
}
}    
}
stats = ("You had" + guesses + "and you successfully eliminated" + hits + "Battleships")
console.log(stats);
