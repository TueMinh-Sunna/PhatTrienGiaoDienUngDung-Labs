data = "Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110"
matches = data.match(/\d+/g).map(Number)
dolphins = matches.slice(0,3)
koalas = matches.slice(4,7)

dolphinsAvg = dolphins.reduce(
    (acumulator, currentValue) => acumulator + currentValue
    , 0) 
    / dolphins.length
console.log(dolphinsAvg);


koalasAvg = koalas.reduce(
    (acumulator, currentValue) => acumulator + currentValue
    , 0)
    / koalas.length
console.log(koalasAvg);


if (dolphinsAvg < koalasAvg && koalasAvg >= 100) {
    console.log("koalas win")
} else if (dolphinsAvg > koalasAvg && dolphinsAvg >= 100) {
    console.log("dolphins win");
} else if(dolphinsAvg === koalasAvg && dolphinsAvg >= 100 && koalasAvg >= 100) {
    console.log("tie");
}
else {
    console.log("no team wins");
}
