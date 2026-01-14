data1 = [17, 21, 23]
data2 = [12, 5, -5, 0, 4]

function printForecast (arr) {
    for (let index = 0; index < arr.length; index++) {
        console.log(`... ${arr[index]}°C in ${index+1} days`);
    }
}

printForecast(data1)
printForecast(data2)