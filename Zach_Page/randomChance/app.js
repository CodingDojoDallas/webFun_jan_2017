
function slotMachine(plays){
    for(var i = plays;  i > -1 ; i--){
      var playerNum = Math.floor((Math.random()*100)+1);
      var slotNum = Math.floor((Math.random()*100)+1);
      if(playerNum === slotNum){

        var win = plays + Math.floor((Math.random()*100)+50);
        plays =  "You win "+ win +" coins!";
        return plays;
      }
      else if(i === 0){
        plays =  "You are out of coins.";
        return plays;
      }
      else{

        console.log("You have "+ i +" tries left.");
      }
    }
    return plays;
}
 console.log(slotMachine(25));
