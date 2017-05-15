function tellTime(hour, min, period) {

var hour = 8;
var min = 35;
var period = 'AM';
var x = 0;

if(min < 30){
	var x = 'just after';
}
else{
	var x = 'almost'
	hour ++;
}
if(period = 'AM'){
	period = 'in the morning';
}
else{
	period = 'in the evening';
}

return "It's " + x + '' + hour + '' + period;
}

console.log(tellTime());
//console.log("It's " + x + hour + period)