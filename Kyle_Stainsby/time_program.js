var HOUR=5;
var MIN=36;
var PERIOD="PM";

if(MIN < 30 && PERIOD =="AM")
{
	console.log("It's just after " + HOUR + " in the morning");
}
if(MIN > 30 && PERIOD=="AM"){
console.log("It's almost " + (HOUR+1) + " in the morning")
}
if(MIN < 30 && PERIOD=="PM"){
console.log("It's just after " + HOUR + " in the evening")
}
if(MIN > 30 && PERIOD=="PM"){
console.log("It's almost " + (HOUR+1) + " in the evening")
}
