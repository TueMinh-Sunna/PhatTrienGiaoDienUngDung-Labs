data = "Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110"
matches = data.match(/\d+/g).map(Number)
dolphins = matches.slice(0,3)
koalas = matches.slice(4,7)

dolphinsAvg = dolphins.reduce(
    (acumulator, currentValue) => acumulator + currentValue
    , 0) 
    / dolphins.length

koalasAvg = koalas.reduce(
    (acumulator, currentValue) => acumulator + currentValue
    , 0)
    / koalas.length

if (dolphinsAvg < koalasAvg) {
    console.log("koalas win")
} else if (dolphinsAvg > koalasAvg) {
    console.log("dolphins win");
} else {console.log("tie");
}
