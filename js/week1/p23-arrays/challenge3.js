const calcAverageHumanAge = ages =>
  ages
    .map(dogAge => (dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4))
    .filter(age => age >= 18)
    .reduce((sum, age, _, arr) => sum + age / arr.length, 0);

const dogsJulia = [5, 2, 4, 1, 15, 8, 3];
const dogsKate = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(dogsJulia));
console.log(calcAverageHumanAge(dogsKate));
