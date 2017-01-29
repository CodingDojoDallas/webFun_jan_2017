var sum=0;
var amt=0;
for(var days=0; days<31;days++)
{
if(amt==0){
	amt=0.01;
	continue;
}

sum= (sum+amt);
amt=amt*2
console.log("amount total " + sum);
console.log("amount rewarded today " + amt);
}
