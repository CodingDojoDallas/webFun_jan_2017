function getTime(hour, minute, period) {
	var hour = 8;
	var minute =20;
	var period ="am";

if (minute >= 30){
	var x ="It is almost ";
	hour ++;
}
else{
	var x =" it is just after ";
}
if (period ="am"){
	var y = " in the morning ";
}
else{
	var y ="in the evening";
}
return x + hour + y;
}
console.log(getTime());