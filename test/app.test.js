var expect = require('chai').expect;
var request = require('superagent');

describe('Bookshelf App', function () {
  var App = require('../app')
  var port = '4444'
  var baseUrl = 'http://localhost:' + port;

  beforeEach(function (done) {
    App.start(port, done);
  });

  afterEach(function (done) {
    App.stop(done);
  });

  describe('the home page', function () {

    it('should say Search', function (done) {
      request.get(baseUrl).end(function (err, resp) {
        expect(err).to.not.be.ok;
        expect(resp).to.have.property('status', 200);
        expect(resp.text).to.equal('Search');
        done();
      });
    });
  });

  describe('the greetings page', function () {

    it('should greet us', function  (done) {
      request.get(baseUrl + '/greetings').end(function (err, resp) {
        expect(err).to.not.be.ok;
        expect(resp).to.have.property('status', 200);
        expect(resp.text).to.match(/Special Thanks to:/i);
        done();
      });
    });
  });
});