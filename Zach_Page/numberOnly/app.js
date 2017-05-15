
function numbersOnly(arr){
  var newArray = [];
  for(var i = 0; i < arr.length ; i++){
    if(typeof arr[i] === "number"){
      newArray.push(arr[i]);
      }
  }
  return newArray;
}
console.log(numbersOnly([1, 23,"apples", "bannanas",true,6,"53",10]));
