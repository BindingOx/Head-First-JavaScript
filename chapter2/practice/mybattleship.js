// Pseudocode

// hold the location of each cell of the ship
let location1;
let location2;
let location3;

let guess; // hold the users guess
let hits = 0; // hold the number of hits and set to 0
let guesses = 0; // hold the number of guesses and set to 0
let isSunk = false; // keep track of whether the ship is sunk or not. set it to false. it becomes true when ship is sunk.

// while (shipIsntSunk) {
// 	getusersguess;
// 	if (validInput) {
// 		guess = guess + 1;
// 		if (shipIsHit) {
// 			hits = hits + 1;
// 			if (shipHit3Times) {
// 				isSunk = true;
// 				alert('You sank my battleship!');
// 			} //end if
// 		} //end if
// 	} else {
// 		alert('Please enter a valid number');
// 	} //end else
// } //end loop
// tellUserStats;

// TODO: Step 1 - Create loop and get user guess
// - The loop. It needs to keep looping while the ship isn’t sunk. 

// TODO: Step 2 - Check user guess
// - Get the guess from the user and validate it.
// - Make sure it really is a number between 0 and 6

// TODO: Step 3 - Check if ship has sunk
// - Write the logic to check for a hit on a ship and see if the ship is sunk.

// TODO: Step 4 - Display states to user
// - Create a little report for the user with the number of guesses it took to sink the ship.