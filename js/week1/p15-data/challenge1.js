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

// 1. Create one player array for each team (variables 'players1' and 'players2')
players1 = game.players[0]
players2 = game.players[1]
// console.log("Players1: ", players1, "\nPlayers2: ", players2);


// 2. The first player in any player array is the goalkeeper and the others are field players. For Bayern Munich (team 1) create one variable ('gk') with the goalkeeper's name, and one array ('fieldPlayers') with all the remaining 10 field players
bayernMunich = {}
bayernMunich.gk = players1[0]
bayernMunich.fieldPlayers =players1.slice(1,)
// console.log("bayernMunich: ", bayernMunich);


// 3. Create an array 'allPlayers' containing all players of both teams (22 players)
allPlayers = players1.concat(players2)
// console.log("allPlayers: ", allPlayers);

// 4. During the game, Bayern Munich (team 1) used 3 substitute players. So create a new array ('players1Final') containing all the original team1 players plus 'Thiago', 'Coutinho' and 'Perisic'
players1Final = players1.concat(['Thiago', 'Coutinho', 'Perisic'])
// console.log("players1Final: ", players1Final);

// 5. Based on the game.odds object, create one variable for each odd (called 'team1', 'draw' and 'team2')
team1 = game.odds.team1
draw = game.odds.x
team2 = game.odds.team2

// 6. Write a function ('printGoals') that receives an arbitrary number of player names (not an array) and prints each of them to the console, along with the number of goals that were scored in total (number of player names passed in)
function printGoals (...playerNames) {
    for (playerName of playerNames)
        console.log(playerName);
    console.log("Total goals: ", playerNames.length);
}
// printGoals('Thiago', 'Coutinho', 'Perisic')

// 7. The team with the lower odd is more likely to win. Print to the console which team is more likely to win, without using an if/else statement or the ternary operator.
game.odds.team1 < game.odds.team2 && console.log(`${game.team1} is more likely to win`);
game.odds.team2 < game.odds.team1 && console.log(`${game.team2} is more likely to win`);
game.odds.team1 === game.odds.team2 && console.log(`tie`);
