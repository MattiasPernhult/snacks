var expect = require('chai').expect;
var snacks = require('./index');

describe('snacks', function() {
    describe('all', function() {
        it('should be an array of object strings', function() {
            expect(snacks.all).to.satisfy(isArrayOfStrings);

            function isArrayOfStrings(arr) {
                return arr.every(function(item) {
                    return typeof item.name === 'string' &&
                        typeof item.kind === 'string' &&
                        typeof item.brand === 'string';
                });
            }
        });

        it('should include `Sourcream and Onion`', function() {
            expect(snacks.all[0].name).to.include('Sourcream and Onion');
        });
    });

    describe('random', function() {
        it('should return a random item from snacks.all', function() {
            var randomItem = snacks.random();
            expect(snacks.all).to.include(randomItem);
        });

        it('should return an array of random numbers if passed a number', function() {
            var randomItems = snacks.random(3);
            expect(randomItems).to.have.length(3);
            randomItems.forEach(function(item) {
                expect(snacks.all).to.include(item);
            });
        });

    });
});
