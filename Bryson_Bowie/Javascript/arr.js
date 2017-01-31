


var arr1 = ["kobe", 5, "Jordan", 8,12, "Hello",6,16,19,""];
var arr2 = [];

for (var i = 0; i<=arr1.length; i++) {
  if(typeof arr1[i] === "number"){
  arr2.push(arr1[i]);
}
else {
  continue;
}
}
console.log(arr2);
//console.log(arr2 typeof arr === "number");
