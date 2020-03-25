/* eslint-env mocha */

const chai = require('chai');

const { expect } = chai;
const chaiHttp = require('chai-http');
const server = require('../src/server');
const { cartesianToAlgebraic } = require('../src/utils/positionTranslator');
const { quit } = require('../src/db/redisConfig');

chai.use(chaiHttp);

const requester = chai.request(server).keepOpen();

describe('API tests', () => {
  after(async () => {
    requester.close();
    quit();
  });

  describe('Get /destination', () => {
    it('should return 400 when parameter is missing', async () => {
      const response = await requester.get('/destinations');

      expect(response.statusCode).to.be.equal(400);
      expect(response.body.error).to.be.equal('Missing parameter: position.');
    });

    it('should return 400 when bad position is sent', async () => {
      const response = await requester.get('/destinations?position=01');

      expect(response.statusCode).to.be.equal(400);
      expect(response.body.error).to.be.equal('Invalid Position.');
    });

    it('should return 200 when a valid position is sent', async () => {
      const response = await requester.get('/destinations?position=B3');

      expect(response.statusCode).to.be.equal(200);
      expect(response.body.error).to.be.equal(undefined);
    });

    it('should respond with an array of valid positions', async () => {
      const isValidPosition = (position) => {
        const translationTry = cartesianToAlgebraic(position);

        expect(translationTry.error).to.be.equal(undefined);
      };
      const { body: responseBody } = await requester.get('/destinations?position=H8');

      expect(Array.isArray(responseBody)).to.be.equal(true);
      responseBody.forEach(isValidPosition);
    });
  });
});
