function birthday(day){
var sad = "ugh, too many days until my birthday";
var happy = "yay my birthday is close!";
var scream = "OMG IM SO EXCITED MY BDAY IS ALMOST HERE";
var bday = "HAPPY BIRTHDAY TO ME!";
 if(day >= 30){
 	console.log(sad);
 }
 else if((day < 30) && (day > 5)){
 	console.log(happy);
 }
else if(( day <= 5) && (day >0)){
	console.log(scream);
}
else if(day == 0){
	console.log(bday);
}
}
birthday(30);