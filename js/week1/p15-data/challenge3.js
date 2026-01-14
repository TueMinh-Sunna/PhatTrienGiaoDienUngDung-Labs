const gameEvents = new Map([
    [17, '⚽ GOAL'],
    [36, '🔁 Substitution'],
    [47, '⚽ GOAL'],
    [61, '🔁 Substitution'],
    [64, '🔶 Yellow card'],
    [69, '🔴 Red card'],
    [70, '🔁 Substitution'],
    [72, '🔁 Substitution'],
    [76, '⚽ GOAL'],
    [80, '⚽ GOAL'],
    [92, '🔶 Yellow card'],
]);

// 1. Create an array 'events' of the different game events that happened (no duplicates)
let events = []
for ([key, value] of gameEvents) {
    if (!events.includes(value)) {
        events.push(value)
    }
}
// console.log(events);

// 2. After the game has finished, is was found that the yellow card from minute 64 was unfair. So remove this event from the game events log.
gameEvents.delete(64)
// console.log(gameEvents);

// 3. Compute and log the following string to the console: "An event happened, on average, every 9 minutes" (keep in mind that a game has 90 minutes)
let count = {}
gameEvents.forEach((value, key) => {
    if (!count[value]) {
        count[value] = 0
    }
    count[value]++
})

for ([key, value] of Object.entries(count)) {
    // console.log(`${key} event happened, on average, every ${90/value} minutes"`);
}

// 4. Loop over 'gameEvents' and log each element to the console, marking whether it's in the first half or second half (after 45 min) of the game, like this:
function whichHalf(number) {
    return number <= 45 ? "FIRST HALF" : "SECOND HALF"
}
gameEvents.forEach((value, key) => {
    console.log(`[${whichHalf(key)}] ${key}: ${value}`);
})