// For a Few Billion

var day = 1;
var reward = 0.01;
var rewardAt30Days;
var daysToTenThousand;
var daysToTenThousandReward;
var daysToABillion;
var daysToABillionReward;

while(reward < Infinity) {
	if (day < 31) {
		console.log("Day " + day + ", reward: $" + numberWithCommas(reward));
	}

	if (day == 30) {
		rewardAt30Days = reward;
	}

	if (reward > 10000 && daysToTenThousand == undefined) {
		daysToTenThousand = day;
		daysToTenThousandReward = reward;
	}

	if (reward > 1000000000 && daysToABillion == undefined) { // 1 billion
		daysToABillion = day;
		daysToABillionReward = reward;
	}

	day++;
	reward *= 2;
}

console.log("\nAs you can see above, after 30 days the servant was rewarded a total sum of $" + numberWithCommas(rewardAt30Days) + ". It took only " + daysToTenThousand + " days to reach the reward sum of $" + numberWithCommas(daysToTenThousandReward) + ". And only " + daysToABillion + " days to reach $" + numberWithCommas(daysToABillionReward) + " (over 1.3 Billion)! And to reach an Infinity of money, it took " + day + " days.");

function numberWithCommas(x) {
	return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}