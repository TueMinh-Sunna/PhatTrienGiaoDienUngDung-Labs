//data
let data1 = "Dolphins score 44, 23 and 71. Koalas score 65, 54 and 49"
let data2 = "Dolphins score 85, 54 and 41. Koalas score 23, 34 and 27"

//team average function
function calcAverage (teamName, scoreArray) {
    let scoreTotal = scoreArray.reduce(
        (accumulator, currentValue) => accumulator + currentValue
        , 0)
    let scoreAvg = scoreTotal / scoreArray.length
    console.log(`${teamName}: `, scoreAvg);
    return scoreAvg
}

//check winner function
function checkWinner (data) {
    let matches = data.match(/\d+/g).map(Number)
    let dolphins = matches.slice(0,3)
    let koalas = matches.slice(4,7)

    let avgDolphins = calcAverage("dolphins", dolphins)
    let avgKoalas = calcAverage("koaloas", koalas)

    if (avgKoalas >= 2*avgDolphins)
        console.log(`Koalas win (${avgKoalas} vs ${avgDolphins})`);
    else if (avgDolphins >= 2*avgKoalas)
        console.log(`Dolphins win (${avgDolphins} vs ${avgKoalas})`);
    else {console.log("No one wins");
    }
}

//test
checkWinner(data1)
checkWinner(data2)