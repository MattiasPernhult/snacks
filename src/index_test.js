var expect = require('chai').expect;
var snacks = require('./index');

describe('random json', function() {

    it('should return an object when passing no number', function() {
        var result = snacks.random();
        expect(result).to.have.all.keys(['name', 'description', 'kindName', 'brandName']);
    });

    it('should return an array of random numbers if passed a number', function() {
        this.timeout(10000);
        var resultRandom = snacks.random(3);
        expect(resultRandom).to.have.length(3);
    });
});


describe('snacks all', function() {

    var snacksArray;
    before(function(done) {
        this.timeout(10000);
        snacks.all(function(result) {
            snacksArray = result;
            done();
        });
    });

    it('should be an array of object strings', function() {
        for (var i = 0; i < snacksArray.length; i++) {
            expect(snacksArray[i].name).to.be.a('string');
            expect(snacksArray[i].kindName).to.be.a('string');
            expect(snacksArray[i].brandName).to.be.a('string');
            expect(snacksArray[i].description).to.be.a('string');
        }
    });

    it('should include `Sourcream & Spanish pepper`', function() {
        var found = false;
        for (var i = 0; i < snacksArray.length; i++) {
            if (snacksArray[i].name === 'Sourcream & Spanish pepper') {
                found = true;
            }
        }
        expect(found).to.equal(true);
    });

});

describe('random', function() {

    it('should return an object when passing no number', function() {
        var result = snacks.random();
        expect(result).to.have.all.keys(['name', 'description', 'kindName', 'brandName']);
    });

    it('should return an array of random numbers if passed a number', function(done) {
        this.timeout(10000);
        var resultRandom = snacks.random(3);
        expect(resultRandom).to.have.length(3);
        snacks.all(function(result) {
            for (var i = 0; i < resultRandom.length; i++) {
                expect(result).to.include(resultRandom[i]);
            }
            done();
        });
    });
});
