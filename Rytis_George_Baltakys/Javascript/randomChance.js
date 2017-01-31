// Random Chance

function playSlots(quarters, walkAwayAmount) {
	var game = 0;
	var outcome = "";

	while(quarters > 0) {

		quarters--;
		game++;

		// random number 0 - 99
		if (Math.floor(Math.random() * 100) == 0) { // won
			var quartersWon = Math.floor(Math.random() * 51) + 50; // random 50 - 100
			quarters += quartersWon;
			outcome = "WON " + quartersWon + " quarters!!!";
		} else { // lost
			outcome = "lost."
		}
		console.log("Game: " + game + "  You have " + outcome + "  Quarters: " + quarters);
		if (quarters >= walkAwayAmount)
			return quarters;
	}

	return 0;
}


var slots = 0;
var quarters = 50;
var walkAwayAmount = 200;
var play = 0;

while(slots == 0) {
	play++;
	console.log("Play: " + play + "\n");
	slots = playSlots(quarters, walkAwayAmount);
	console.log("\n");
}

console.log("It took you " + play + " plays using about " + (play * quarters) + " quarters to win " + slots + " quarters!\n");


