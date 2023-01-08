// const xyz = require('./people.js'); // call the file people.js
// const { people } = require('./people.js') // extract only people from the module
const { people, ages} = require('./people.js'); // extract both modules


// console.log(xyz);
// console.log(people);

// console.log(xyz.people, xyz.ages);

// console.log(people, ages); // doesnt work cuz we didnt extract ages
// console.log(people, ages);

const os = require('os'); // already present in the global
// console.log(os.platform(), os.homedir());

console.log(os)