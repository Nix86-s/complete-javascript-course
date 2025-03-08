const country = 'England';
const continent = 'Europe';
let population = 65;

let isIsland = country === 'England' ? true : false;

const language = 'English';

console.log(country);
console.log(language);
console.log(isIsland);
console.log(continent);
console.log(population);

// population /= 2;
// console.log(population);

// population++;
// console.log(population);

const finPop = 6;
const avgPop = 33;
console.log(population > finPop);
console.log(population > avgPop);

let description = `${country} is in ${continent}, and its ${population} million people speak ${language}.`;
console.log(description);

if (population > avgPop) {
  console.log(`${country}'s population is ${population - avgPop} million above the average`);
}

console.log('9' - '5'); // -> ?
console.log('19' - '13' + '17'); // -> ?
console.log('19' - '13' + 17); // -> ?
console.log('123' < 57); // -> ?
console.log(5 + 6 + '4' + 9 - 4 - 2); // -> ?

// let numNeighbours = parseFloat(prompt('How many neighbour countries does your country have?'));

// if (numNeighbours === 1) {
//   console.log(`Only ${numNeighbours} border!`);
// } else if (numNeighbours > 1) {
//   console.log('More than 1 border!');
// } else {
//   console.log('No borders');
// }

if (language === 'English' && population < 50 && !isIsland) {
  console.log(`You should live in ${country}`);
} else {
  console.log(`${country} does not meet your criteria`);
}

switch (language) {
  case 'Mandarin':
  case 'Chinese':
    console.log('MOST number of native speakers');
    break;

  case 'Spanish':
    console.log('2nd place for native speakers');
    break;
  case 'English':
    console.log('3rd place for native speakers');
    break;
  default:
    console.log('Great language too!');
    break;
}
