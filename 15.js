function calculateInterest(money, years) {
    for (i = 0; i < years; i++) {
        money = money + (money * 0.025)
    }
    return money
}
console.log(calculateInterest(100000,1));
