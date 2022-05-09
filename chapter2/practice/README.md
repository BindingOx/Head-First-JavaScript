## User flow diagram

![Image](battleship-game-user-flow.png 'icon')

_Changes from the book's version_

- I changed the sunk arrow to being from the "Check guess" block to the "Mark ship as hit" block. This feels like a better representation of the flow.
- I added 2C and 2D

## Pseudocode

![Image](battleship-game-user-flow-pseudocode.png 'icon')

```js
while (shipIsntSunk) {
	getusersguess;
	if (validInput) {
		guess = guess + 1;
		if (shipIsHit) {
			hits = hits + 1;
			if (shipHit3Times) {
				isSunk = true;
				alert('You sank my battleship!');
			} //end if
		} //end if
	} else {
		alert('Please enter a valid number');
	} //end else
} //end loop
tellUserStats;
```

_Changes from the book's version_

- validInput instead of invalidInput so the code is shifted around a little bit.

## Logic for the guesses

If the ship is in 3, 4, 5 and the user's guesses are 1, 4, 2, 3, 5:

| location1 | location2 | location3 | guess | guesses | hits | isSunk |
| --------- | --------- | --------- | ----- | ------- | ---- | ------ |
| 3         | 4         | 5         | —     | 0       | 0    | false  |
| 3         | 4         | 5         | 1     | 1       | 0    | false  |
| 3         | 4         | 5         | 4     | 2       | 1    | false  |
| 3         | 4         | 5         | 2     | 3       | 1    | false  |
| 3         | 4         | 5         | 3     | 4       | 2    | false  |
| 3         | 4         | 5         | 5     | 5       | 3    | true   |

The guess isn't initialized at first so its value is undefined

When hits=3, isSunk should be true

## Divide the code into 4 parts

### Step 1 - Create loop and get user guess

- The loop. It needs to keep looping while the ship isn’t sunk.

```js
while (isSunk == false) {
	guess = prompt('Ready, aim, fire! (enter a number 0-6):');
}
```

### Step 2 - Check user guess

- Get the guess from the user and validate it.
- Make sure it really is a number between 0 and 6
- update the guesses variable

```js
while (isSunk == false) {
	guess = prompt('Ready, aim, fire! (enter a number 0-6):');
	if (guess >= 0 && guess <= 6) {
		guesses = guesses + 1;
	} else {
		alert('Please enter a valid cell number!');
	}
}
```

### Step 3 - Check if ship has sunk

- Write the logic to check for a hit on a ship and see if the ship is sunk.

### Step 4 - Display states to user

- Create a little report for the user with the number of guesses it took to sink the ship.
