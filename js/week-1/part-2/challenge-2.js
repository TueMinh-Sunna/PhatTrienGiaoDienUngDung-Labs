function calcTip (bill) {
    return bill < 50 ? 0 : bill <= 300 ? .15*bill : .2*bill
}

let bills = [125, 555, 44]
let tips = []
let totals = []

for (bill of bills) {
    let tip = calcTip(bill)
    tips.push(tip)
    let total = bill + tip
    totals.push(total)
    console.log("Bill: ", bill,
        "\nTip: ", tip,
        "\nTotal: ", total,
        "\n"
    );
    
}