function playSlots(quarters = 100, walkAwayAmount) {
	var game = 0;
	var outcome = "";

	while(quarters > 0) {

		quarters--;
		game++;

	
		if (Math.floor(Math.random() * 101) == 0) { 
			var quartersWon = Math.floor(Math.random() * 51) + 50;
			quarters += quartersWon;
			outcome = "WON " + quartersWon + " quarters!!!";
		} else { 
			outcome = "lost."
		}
		console.log("Game: " + game + "  You have " + outcome + "  Quarters: " + quarters);
		if (quarters >= walkAwayAmount)
			return quarters;
	}

	return 0;
}
playSlots();