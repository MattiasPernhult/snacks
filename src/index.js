var uniqueRandomArray = require('unique-random-array');
var snacks = require('./snacks.json');

var getRandomItem = uniqueRandomArray(snacks);

module.exports = {
    all: snacks,
    random: randomize
};

function randomize(number) {
    if (number === undefined) {
        return getRandomItem();
    } else {
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(getRandomItem());
        }
        return randomItems;
    }
}
