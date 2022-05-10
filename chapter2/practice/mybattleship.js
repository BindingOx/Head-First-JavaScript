// hold the location of each cell of the ship
let location1 = 3;
let location2 = 4;
let location3 = 5;

let guess; // hold the users guess
let hits = 0; // hold the number of hits and set to 0
let guesses = 0; // hold the number of guesses and set to 0
let isSunk = false; // keep track of whether the ship is sunk or not. set it to false. it becomes true when ship is sunk.

// Pseudocode

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

// Step 1 - Create loop and get user guess
// - The loop. It needs to keep looping while the ship isn’t sunk.

// while (isSunk == false) {
// 	guess = prompt('Ready, aim, fire! (enter a number 0-6):'); //step 1
// }

// Step 2 - Check user guess
// - Get the guess from the user and validate it.
// - Make sure it really is a number between 0 and 6
// - Update the guesses variable

// while (isSunk == false) {
// 	guess = prompt('Ready, aim, fire! (enter a number 0-6):'); //step 1

// 	if (guess >= 0 && guess <= 6) {
// 		//step 2
// 		guesses = guesses + 1;
// 	} else {
// 		alert('Please enter a valid cell number!');
// 	}
// }

// Now write the code to determine if that guess has hit the ship

// if (guess == location1 || guess == location2 || guess == location3) {
// 	hits = hits + 1;
// }

// Now combine

// while (isSunk == false) {
// 	guess = prompt('Ready, aim, fire! (enter a number 0-6):'); //step 1

// 	if (guess >= 0 && guess <= 6) {
// 		//step 2
// 		guesses = guesses + 1;
// 		if (guess == location1 || guess == location2 || guess == location3) {
// 			hits = hits + 1;
// 		}
// 	} else {
// 		alert('Please enter a valid cell number!');
// 	}
// }

// Step 3 - Check if ship has sunk
// - Write the logic to check for a hit on a ship and see if the ship is sunk.

// if (hits == 3) {
// 	isSunk = true;
// 	alert('You sank my battleship!');
// }

// Intermediate step  - test code
// combine with hit and miss alerts and initialize location variables in order to test the code

// while (isSunk == false) {
// 	guess = prompt('Ready, aim, fire! (enter a number 0-6):'); //step 1

// 	if (guess >= 0 && guess <= 6) {
// 		//step 2
// 		guesses = guesses + 1;
// 		if (guess == location1 || guess == location2 || guess == location3) {
// 			hits = hits + 1;
// 			alert('Hit!');
// 			if (hits == 3) {
// 				//step 3
// 				isSunk = true;
// 				alert('You sank my battleship!');
// 			}
// 		} else {
// 			alert('Miss!');
// 		}
// 	} else {
// 		alert('Please enter a valid cell number!');
// 	}
// }

//! Hit amd Miss prompts work but user can just keep inputting the same answer

// Step 4 - Display states to user
// - Create a little report for the user with the number of guesses it took to sink the ship.

// let stats = "You took " + guesses + "guesses to sink the battleship, " +
// "which means your shooting accuracy was " + (3/guesses);
// alert(stats);

// combined:

// FIXED: guesses aren't counting up. It says "You took 0 guesses to sink the battleship, which means your shooting accuracy was Infinity"
// At multiple breakpoints (before miss alert, hit alert, and win condition) even though guesses are counting normally, stats always displays this message. I learned that where you declare the variable matters, and the stats code is executing before the game even starts. I never told stats to change, I told guesses to increase, so it changes but when I declared stats in the beginning, it remains static.

while (isSunk == false && guess !== null) {
	//add cancel option
	guess = prompt('Ready, aim, fire! (enter a number 0-6):'); //step 1

	if (guess >= 0 && guess <= 6) {
		//step 2
		guesses++;

		if (guess == location1 || guess == location2 || guess == location3) {
			hits = hits + 1;
			alert('Hit!');
			if (hits == 3) {
				//step 3
				isSunk = true;
				alert('You sank my battleship!');
				console.table(guesses);
			}
		} else {
			alert('Miss!');
		}
	} else {
		alert('Please enter a valid cell number!');
	}
}
let stats =
	'You took ' +
	guesses +
	' guesses to sink the battleship, ' +
	'which means your shooting accuracy was ' +
	3 / guesses; //step 4 - display stats at end of game

alert(stats);
