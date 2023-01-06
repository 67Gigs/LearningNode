const people = ['yoshi', 'ryu', 'chun-li', 'mario'];
const ages = [20, 25, 30, 35]


console.log(people);

// module.exports = people; // export people only

module.exports = {
    people: people,
    ages: ages
}; // exporting a bunch of var as an object