

function displayTime(hour,minute,period){
	var hour = 10;
	var minute = 35;
	var period = "AM";

	if(minute >= 30){
		var timing = 'almost';
		hour++;
	}
	else {
		var timing = 'just after'
	}
	if(period == 'AM'){
		period = 'morning'
	}
	else {
		period = 'afternoon'
	}
	return "It's " + timing + ' ' + hour + ' in the ' + period;
}
 console.log( displayTime() );

