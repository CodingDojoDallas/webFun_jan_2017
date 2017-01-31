var after_almost_text;
var day_period_text;

function whatsTheTime(HOUR, MINUTE, PERIOD) {
	if (MINUTE < 30) {
		after_almost_text = "It's just after " + HOUR;
	} else {
		after_almost_text = "It's almost " + (HOUR + 1);
	}

	if (PERIOD == "AM") {
		day_period_text = " in the morning";
	} else {
		day_period_text = " in the evening";
	}
}

var HOUR = 8;
var MINUTE = 50;
var PERIOD = "AM";

whatsTheTime(HOUR, MINUTE, PERIOD);
console.log(after_almost_text + day_period_text);


var HOUR = 7;
var MINUTE = 15;
var PERIOD = "PM";

whatsTheTime(HOUR, MINUTE, PERIOD);
console.log(after_almost_text + day_period_text);