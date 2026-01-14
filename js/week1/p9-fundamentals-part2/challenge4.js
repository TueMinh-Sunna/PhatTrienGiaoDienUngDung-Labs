let bills = [22, 295, 176, 440, 37, 105, 10, 1100, 86, 52]
let tips = []
let totals = []

function calcTip (bill) {
    return bill < 50 ? 0 : bill <= 300 ? .15*bill : .2*bill
}

for (bill of bills) {
    let tip = calcTip(bill)
    tips.push(tip)
    let total = bill + tip
    totals.push(total)
}

function calcAverage (arr) {
    return arr.reduce(
        (accumulator, currentValue) => accumulator + currentValue
        , 0) / arr.length
}

console.log(calcAverage(totals).toFixed(2));
