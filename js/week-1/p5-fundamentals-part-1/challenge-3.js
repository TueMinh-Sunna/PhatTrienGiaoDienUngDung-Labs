data = "Dolphins score 96, 108 and 89. Koalas score 88, 91 and 110"
matches = data.match(/\d+/g).map(Number)
dolphins = matches.slice(0,3)
koalas = matches.slice(4,7)

avgDolphins = dolphins.reduce(
    (acumulator, currentValue) => acumulator + currentValue
    , 0) 
    / dolphins.length
console.log(avgDolphins);


avgKoalas = koalas.reduce(
    (acumulator, currentValue) => acumulator + currentValue
    , 0)
    / koalas.length
console.log(avgKoalas);


if (avgDolphins < avgKoalas && avgKoalas >= 100) {
    console.log("koalas win")
} else if (avgDolphins > avgKoalas && avgDolphins >= 100) {
    console.log("dolphins win");
} else if(avgDolphins === avgKoalas && avgDolphins >= 100 && avgKoalas >= 100) {
    console.log("tie");
}
else {
    console.log("no team wins");
}
