function slot_machine(quarters=20) //input number of quarters here
{
	while(quarters>0){
var roll=Math.trunc(Math.random() * 100)
roll=roll+1
console.log("You rolled " + roll);
quarters--;
console.log("You have " + quarters + " Quarters")
if(roll === 100)
		{var winnings=Math.trunc(Math.random() * 50)+51;
			console.log("BIG WINNER YOU RECEIVE " + winnings + " Quarters");
			quarters=+winnings;
		}

else(console.log("YOU LOSE"))
	}
}
slot_machine()
