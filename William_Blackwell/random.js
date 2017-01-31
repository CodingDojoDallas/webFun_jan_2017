function slots(quarters){
    var playerN =Math.floor((Math.random() * 100)+1);
    var machineN =Math.floor((Math.random() * 100)+1);
    
  
    if(playerN === machineN){
      i = i + Math.floor((Math.random() * 100)+50);
	    console.log(i);
  }
     else if(i < 1){
      console.log("kick rocks");
   }
    else{
      console.log("you have " + i + " plays left");

  }
  
  }
  quarters = 500;
  for(var i= quarters; i > -1; i--){
    slots();
  }

