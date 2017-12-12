// double your money for 30 days starting at a penny

var money = .01;
daysTo10k = 0;

for (var days = 1; days < 31; days ++ ) 
{
    console.log("On day", days, "I have $",money);
        if (money <= 10000){
            daysTo10k++;
        }
    money *= 2;
}
console.log("it takes", daysTo10k, "days to get to over $10,000 if you double your money every day starting with a penny because it took 0 days to start with that penny on day 1");