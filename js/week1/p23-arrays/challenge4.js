'use strict';

const dogs = [
  { weight: 22, curFood: 250, owners: ['Alice', 'Bob'] },
  { weight: 8, curFood: 200, owners: ['Matilda'] },
  { weight: 13, curFood: 275, owners: ['Sarah', 'John'] },
  { weight: 32, curFood: 340, owners: ['Michael'] },
];

dogs.forEach(dog => {
  dog.recommendedFood = dog.weight ** 0.75 * 28;
});

const isEatingOkay = dog =>
  dog.curFood > dog.recommendedFood * 0.9 &&
  dog.curFood < dog.recommendedFood * 1.1;

const sarahsDog = dogs.find(dog => dog.owners.includes('Sarah'));

if (sarahsDog.curFood > sarahsDog.recommendedFood) {
  console.log("Sarah's dog is eating too much!");
} else if (sarahsDog.curFood < sarahsDog.recommendedFood) {
  console.log("Sarah's dog is eating too little!");
} else {
  console.log("Sarah's dog is eating exactly the recommended amount!");
}

const ownersEatTooMuch = dogs
  .filter(dog => dog.curFood > dog.recommendedFood)
  .flatMap(dog => dog.owners);

const ownersEatTooLittle = dogs
  .filter(dog => dog.curFood < dog.recommendedFood)
  .flatMap(dog => dog.owners);

const formatOwners = owners => owners.join(' and ');

console.log(`${formatOwners(ownersEatTooMuch)}'s dogs eat too much!`);
console.log(`${formatOwners(ownersEatTooLittle)}'s dogs eat too little!`);

console.log(dogs.some(dog => dog.curFood === dog.recommendedFood));

console.log(dogs.some(isEatingOkay));

const dogsEatingOkay = dogs.filter(isEatingOkay);
console.log(dogsEatingOkay);

const dogsSortedByRecommendedFood = dogs
  .slice()
  .sort((a, b) => a.recommendedFood - b.recommendedFood);

console.log(dogsSortedByRecommendedFood);
