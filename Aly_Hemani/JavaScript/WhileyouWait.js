function whileWait() {
	var daysUntilMyBirthday = 0;

	for (daysUntilMyBirthday=60;daysUntilMyBirthday>=1;daysUntilMyBirthday--){
		if(daysUntilMyBirthday>=30){
			console.log(daysUntilMyBirthday + " days until my birthday. So far away");
		}
		if(daysUntilMyBirthday<30 && daysUntilMyBirthday>5){
			console.log(daysUntilMyBirthday + "days until my birthday. Its getting closer");
		}
		if(daysUntilMyBirthday<30 && daysUntilMyBirthday<=5 &&daysUntilMyBirthday>1){
			console.log(daysUntilMyBirthday + "days until my birthday. I can taste it");
		}
		if(daysUntilMyBirthday==1){
			console.log(daysUntilMyBirthday + "day until my birthday. I can taste it");
		}
	}console.log("It's my birthday! Happy birthday to me.");
}
console.log(whileWait());