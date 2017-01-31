printRange(2, 10, 2);

function printRange(start, end, by) {
	for(var i = start; i < end; i += by) {
		console.log(i);
	}
}