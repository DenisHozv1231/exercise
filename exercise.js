//1
return input.length;

//2

return input[input.length - 1];

//3

return Math.min(...arr);

//4

function calculateAverageCountryPopulation(countries) {  
    if (countries.length === 0) {
      return 0;
    } else {
      return countries.reduce((acc,country) => country.population + acc ,0)/countries.length;  
    }

//5

function hasNoneLetters(blacklist, phrase) {
  // Only change code below this line
  return blacklist.toLowerCase().split("").map(letter => !phrase.toLowerCase().split("").includes(letter)).every(value => value === true);
  
//6
function getOverlappingLetters(first, second) {
   const duplicates = [];
  for (let letter of first.toLowerCase()) {
    if (second.toLowerCase().includes(letter) && !duplicates.includes(letter)) {
      duplicates.push(letter);
    }
  }
  
  return duplicates.join("");
}
