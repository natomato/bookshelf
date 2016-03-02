var expect = require('chai').expect;

describe('Name database model function', function () {
  var nameDB = require('../name-db');

  describe('get random names', function () {
    describe('when given an argument of 3', function () {
      it('should return 3 names', function () {
        var names = nameDB.getRandomNames(3);
        expect(names).to.have.length(3);
        expect(names[0]).to.be.a('string');
      });
    });
  });
});