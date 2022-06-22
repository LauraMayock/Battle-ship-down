//Declare variables needed

let location1 = 3;
let location2 = 4;   //3 varibales in which the computers ship will reside
let location3 = 5;
let guess = 0;    // A variable to hold the users guess
let hits = 0;  // A variable to hold the hits 
let guesses = 0;
let isSunk = "false";
let stats;

// when a cell is clicked, it checks if the ship is there and updates the score if it is
while (isSunk == "false") {
    guess = prompt("Enter new target location");   // Add prompt to user to enter a location
    if (guess < 0 || guess > 6) {                  // Ensure that the the info entered into prompt refers to a true location
        alert("lease enter a valid cell number");  // alert the user to enter a valid cell location
    } else {
        guesses = guesses + 1;    // if a location is entered a guess score is added
    } if (guess == location1) {   // user location is checked with each of the 3 computers locations
        hits = hits + 1;
        alert("You sank my battleship!");   // alert if it is a sucessful attempt by the user
    } else if (guess == location2) {
        hits = hits + 1;
        alert("You sank my battleship!");  
    } else if (guess == location3) {
        hits = hits + 1;
        alert("You sank my battleship!");    
    } else (guess != location1 || location2 || location3)        /// alert if attempt was not sucessul
        alert("Target missed, Try again")
        };
    
stats = ("You had" + guesses + "and you successfully eliminated" + hits + "Battleships")
console.log(stats);