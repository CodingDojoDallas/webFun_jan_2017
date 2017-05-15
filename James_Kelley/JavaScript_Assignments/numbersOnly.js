function numbersOnly(arr) {

	var numbersOnly = [];
	
	for (var i = 0; i < arr.length; i++) {
		if (typeof arr[i] === "number") {
			numbersOnly.push(arr[i]);
		}
	}
	return numbersOnly;
}
var example = [1, "apple", -3, "orange", 0.5];
var numbersOnly = numbersOnly(example);

console.log(numbersOnly);
