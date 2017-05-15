function birthDayCountDown() {
	
	var x = ''

	for(var i = 60; i >= 0; i--){
		if(i > 30){
			x = 'Such a long Time!'
		}
		if(i < 30){
			x = 'So close!';
		}
		if(i < 30 && i < 5){
			x = 'Yeah!';
		}
		console.log(i + ' ' + ' days until my birthday ' + '' + x)
	}
		
}
birthDayCountDown()