function billion() {

	var sum = .01;

	for(var i = 30; i >= 1; i--){
		sum = sum * 2
	}
	console.log(sum)
}
billion()