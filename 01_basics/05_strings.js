const name = "Muhaddis";
const repoCount = 42;
const repoInfo = "Muhaddis has " + repoCount + " repositories.";
const repoInfo2 = `Muhaddis has ${repoCount} repositories.`;// template literals | new way to concatenate strings
const greeting = "Hello, " + name + "!";
const greeting2 = `Hello, ${name}!`; // template literals | new way to concatenate strings

console.log(repoInfo);
console.log(repoInfo2);
console.log(greeting);
console.log(greeting2);

const gameName = new String("Chess"); //

console.log(gameName);
console.log(typeof gameName);

console.log(gameName.__proto__.length);
console.log(gameName.length);