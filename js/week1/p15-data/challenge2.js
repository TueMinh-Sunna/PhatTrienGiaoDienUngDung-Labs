const game = {
    team1: 'Bayern Munich',
    team2: 'Borrussia Dortmund',
    players: [
        [
            'Neuer',
            'Pavard',
            'Martinez',
            'Alaba',
            'Davies',
            'Kimmich',
            'Goretzka',
            'Coman',
            'Muller',
            'Gnarby',
            'Lewandowski',
        ],
        [
            'Burki',
            'Schulz',
            'Hummels',
            'Akanji',
            'Hakimi',
            'Weigl',
            'Witsel',
            'Hazard',
            'Brandt',
            'Sancho',
            'Gotze',
        ],
    ],
    score: '4:0',
    scored: ['Lewandowski', 'Gnarby', 'Lewandowski',
        'Hummels'],
    date: 'Nov 9th, 2037',
    odds: {
        team1: 1.33,
        x: 3.25,
        team2: 6.5,
    },
};

// 1. Loop over the game.scored array and print each player name to the console, along with the goal number (Example: "Goal 1: Lewandowski")
for (let index = 0; index < game.scored.length; index++) {
    // console.log(`Goal ${index+1}: ${game.scored[index]}`);
}

// 2. Use a loop to calculate the average odd and log it to the console 
odds = Object.values(game.odds)
// console.log(odds.reduce((accumulator, currentValue) => accumulator + currentValue, 0) / odds.length);


// 3. Print the 3 odds to the console, but in a nice formatted way, exactly like this
for ([key,value] of Object.entries(game.odds)) {
    term = game[key] ? "victory " + game[key] : "draw"
    // console.log("Odd of " + term + ": " + value);
}

// 4. Bonus: Create an object called 'scorers' which contains the names of the players who scored as properties, and the number of goals as the value. In this game, it will look like this:
let count = {}
game.scored.forEach((item) => {
    if (!count[item]) {
        count[item] = 0
    }
    count[item]++
})

for ([key,value] of Object.entries(count)) {
    console.log(`${key}: ${value}`);
}

