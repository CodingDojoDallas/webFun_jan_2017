function printRnge(start, end, skip){
	if((skip == null)||(skip < 1)){
	  skip = 1;
	}
for(i = start; i < end; i += skip){
	console.log(i);
}
}
printRnge(2,30,6);