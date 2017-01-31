function numbersOnly(){
	arr_new=[];
	arr=[1, "apple", -3, "orange", 0.5];
for(var i = 0; i<arr.length; i++){
	if (typeof arr[i]==="number")
	{arr_new.push(arr[i])}
	}
console.log(arr_new);
}
numbersOnly();
