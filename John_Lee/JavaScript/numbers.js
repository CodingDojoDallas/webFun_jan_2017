function numbersONLY(){
  newarr=[];
  arr=[1,"apple", -3, "orange", 0.5];
  for(var i=0;i<arr.length;i++){
    if(typeof arr[i] === "number"){
      newarr.push(arr[i]);
    }
  }
  console.log(newarr);
}
numbersONLY();
