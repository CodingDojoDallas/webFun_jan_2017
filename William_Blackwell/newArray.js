function newArrays(){
var arr = ["yellow",7,2,4,"blue",7]
var newA = []
for(i=0;i<arr.length;i++){
	if(typeof arr[i] === "number"){
		newA.push(arr[i]);
}

}
console.log(newA);
}
newArrays();
