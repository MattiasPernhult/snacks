var uniqueRandomArray = require('unique-random-array');
var dbSnacks = require('./db');
var JSONsnacks = require('./snacks.json');
var snacks;

module.exports = {
    all: allSnacks,
    random: randomize
};

function allSnacks(callback) {
    if (snacks === undefined) {
        dbSnacks.getAll(function(result) {
            snacks = result;
            callback(snacks);
        });
    } else {
        callback(snacks);
    }
}

function randomize(number) {
    if (snacks === undefined) {
        return getRandomItemsFromJSON(number);
    } else {
        return getRandomItems(number);
    }
}

function getRandomItemsFromJSON(number) {
    if (number === undefined) {
        return uniqueRandomArray(JSONsnacks)();
    } else {
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(uniqueRandomArray(JSONsnacks)());
        }
        return randomItems;
    }
}

function getRandomItems(number) {
    if (number === undefined) {
        return uniqueRandomArray(snacks)();
    } else {
        var randomItems = [];
        for (var i = 0; i < number; i++) {
            randomItems.push(uniqueRandomArray(snacks)());
        }
        return randomItems;
    }
}
