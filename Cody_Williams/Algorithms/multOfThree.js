function multOfThree(){
	for(var i = -300; i < 0; i+=3){
		if(i == -3 || i == -6){
			continue;
		}
		else {
			console.log(i);
		}
	}
}

multOfThree();