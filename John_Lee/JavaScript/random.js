function randomchance(){
  var coins=20;
  for(var i=1;i<=coins;i++){
    var result = Math.floor(Math.random()*100+1);
    if(result === 50){
      var bonus = Math.floor(Math.random()*(100-50)+50);
      console.log("WINNER! "+(coins-i+bonus) + " Coins");
      break;
    }
    else if(i===coins){
      console.log("0 Coins");
    }
    else{
      console.log("Sorry Try Again");
    }
  }
}
return randomchance();
