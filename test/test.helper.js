var chai = require('chai');
var chaiImmutable = require('chai-immutable');
var expect = chai.expect;
var chaiAsPromised = require('chai-as-promised');
var sinonChai = require('sinon-chai');

chai.use(chaiImmutable);
chai.use(chaiAsPromised);
chai.use(sinonChai);
