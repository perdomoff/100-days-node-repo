//Point 1
//Calculating the averages

const dolplhinsAverage =
  [96, 108, 89].reduce((total, curr) => total + curr, 0) / 3;
const koalasAverage =
  [88, 91, 110].reduce((total, curr) => total + curr, 0) / 3;

console.log("Dolphins Average", dolplhinsAverage);
console.log("Koalas Average", koalasAverage);

//Point2
//Compare team's average

if (dolplhinsAverage > koalasAverage) {
  console.log("Dolphins win over the Koalas.");
} else if (dolplhinsAverage < koalasAverage) {
  console.log("Koalas win over the Dolphins.");
} else {
  console.log("Draw..!");
}

//Point 3
// repeat exercise with minimum score requirements

const dolplhinsAverageWithRequirements =
  [96, 108, 89].reduce((total, curr) => (curr > 99 ? total + curr : total), 0) /
  3;
const koalasAverageWithRequirements =
  [88, 91, 110].reduce((total, curr) => (curr > 99 ? total + curr : total), 0) /
  3;

console.log("Dolphins Average with Reqs", dolplhinsAverageWithRequirements);
console.log("Koalas Average with reqs", koalasAverageWithRequirements);

if (dolplhinsAverageWithRequirements > koalasAverageWithRequirements) {
  console.log("Dolphins win over the Koalas.");
} else if (dolplhinsAverageWithRequirements < koalasAverageWithRequirements) {
  console.log("Koalas win over the Dolphins.");
} else {
  console.log("Draw..!");
}
