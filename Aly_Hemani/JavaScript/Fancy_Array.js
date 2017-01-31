function fancyArray() {
	var arr=['James', 'Jill', 'Jane', 'Jack'];
	var symbol =' -> ';

	for(var i=0; i<4; i++){
		console.log(i + symbol + arr[i]);
	}
}
fancyArray();