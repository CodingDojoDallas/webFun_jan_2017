// Birthday Countdown

function isItMyBirthdayYet(day) {

	if (day == 0) {
		console.log("♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪ღ♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•*");
		console.log("♪ღ♪░H░A░P░P░Y░ B░I░R░T░H░D░A░Y░░♪ღ♪");
		console.log("*•♪ღ♪*•.¸¸¸.•*¨¨*•.¸¸¸.•*•♪¸.•*¨¨*•.¸¸¸.•*•♪ღ♪•«");
	} else if (day == 1) {
		console.log(day + " DAY UNTIL MY BIRTHDAY. WOOOHOOO!!!");
	} else if (day < 5) {
		console.log(day + " DAYS UNTIL MY BIRTHDAY. WOOOT!!");
	} else if (day < 30) {
		console.log(day + " days until my birthday. Woot!");
	} else {
		console.log(day + " days until my birthday. Such a long time... :(");
	} 
}

var daysUntilMyBirthday = 60;

for (var i = daysUntilMyBirthday; i >= 0; i--) {
	isItMyBirthdayYet(i);
}