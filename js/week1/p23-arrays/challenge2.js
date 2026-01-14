const calcAverageHumanAge = function (ages) {
  const humanAges = ages.map(dogAge =>
    dogAge <= 2 ? 2 * dogAge : 16 + dogAge * 4
  );

  const adults = humanAges.filter(age => age >= 18);

  const average =
    adults.reduce((sum, age) => sum + age, 0) / adults.length;

  return average;
};

const dogsJulia = [5, 2, 4, 1, 15, 8, 3];
const dogsKate = [16, 6, 10, 5, 6, 1, 4];

console.log(calcAverageHumanAge(dogsJulia));
console.log(calcAverageHumanAge(dogsKate));
