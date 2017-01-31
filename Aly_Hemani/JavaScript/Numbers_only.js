function numbersOnly() {
	var arr=[1, 'apple', -3, 'orange', 0.5];
	var newArray=[];

	for(var i=0; i<arr.length; i++){
		if(typeof arr[i] === "number"){
			newArray.push(arr[i]);
		}
		else{
			continue;
		}
	}console.log(newArray);
}
numbersOnly();