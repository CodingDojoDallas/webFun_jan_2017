// Numbers Only

"use strict";

function numbersOnly(array) {
	var numbersOnly = [];
	for (var i = 0; i < array.length; i++) {
		if (typeof array[i] === "number") {
			numbersOnly.push(array[i]);
		}
	}
	return numbersOnly;
}

var newArray = [1, "apple", -3, "orange", 0.5];
var numbersOnly = numbersOnly(newArray);

console.log(newArray);
console.log(numbersOnly);