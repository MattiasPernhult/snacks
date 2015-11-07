var uniqueRandomArray = require('unique-random-array');
var snacks = require('./snacks.json');

module.exports = {
    all: snacks,
    random: uniqueRandomArray(snacks)
};
