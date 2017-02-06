function countTheDojoWay(){
	for(var i = 1; i < 101; i++){
		if(i % 10 == 0){
			console.log('Coding Dojo');
		}
		else if(i % 5 == 0){
			console.log('Coding');
		}
		else{
			console.log(i);
		}
	}
}

countTheDojoWay();