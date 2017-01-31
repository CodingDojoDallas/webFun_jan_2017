function printRange(x,y,z){
  z = Math.abs(z);
  if(x > y){
  console.log("you have your start and end points backwards.");
  }
  else{
  for(var i = x; i < y; i += z){
    console.log(i);
  }
  }
}

printRange(-10,20,-4);
