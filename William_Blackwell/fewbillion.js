function aFew(){
var sum = 0.01;
	for(var i = 1; i < 31;i++){
	sum = sum * 2;
	
}
sum = sum / 100;
return sum;

}
console.log(aFew());