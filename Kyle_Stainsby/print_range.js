function printRange(min=17, max=92, inc=4){
	var sum=0;
	for(var i=1;sum<(max-inc);i++){
		sum=(i*inc)+min;
		console.log(sum);
	}
}
printRange();
