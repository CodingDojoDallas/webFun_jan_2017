var daysUntilMyBirthday =50;
while(daysUntilMyBirthday > -1)
{
	if(daysUntilMyBirthday == 0)
	{
		console.log("!!!!!!!!!!!!!!!!!!!!!!HAPPY BIRTHDAY!!!!!!!!!!!!!!!!!!!!!!!")
		break;
	}
	else if (daysUntilMyBirthday < 5)
	{
		console.log(daysUntilMyBirthday + "DAYS UNTIL MY BIRTHDAY!!!")
		daysUntilMyBirthday=(daysUntilMyBirthday-1)
		continue;
	}
	else if (daysUntilMyBirthday < 30)
	{
		console.log(daysUntilMyBirthday + "days until my birthday!")
		daysUntilMyBirthday=(daysUntilMyBirthday-1)
		continue;
	}
	else (daysUntilMyBirthday > 30)

	{
		console.log(daysUntilMyBirthday + "days until my birthday. Such a long time...:(")
		daysUntilMyBirthday=(daysUntilMyBirthday-1);
		continue;
	}

}
