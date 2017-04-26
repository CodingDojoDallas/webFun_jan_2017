function Lotto(quarters=10) {
var quarters=1000;
  while (quarters>0) {
  var  roll= Math.floor(Math.random()* 100+ 1);
  console.log(roll)
    if (roll === 1 ) {
      var winnigs =Math.trunc(Math.random()*100 + 1)
      console.log("Congrats You Win");
      return (quarters = quarters + winnigs);
    }
    else {
      console.log("Sorry you lose :(");
    }
    quarters--
  }
  return quarters
  }

Lotto();
