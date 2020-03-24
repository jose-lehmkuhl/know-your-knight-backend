/* eslint-env mocha */
const { expect } = require('chai');
const { getPossibleDestinations } = require('../src/Controllers/KnightController');

describe('Knight: movement tests', () => {
  describe('Corner positions tests', () => {
    const fromUpperLeftCorner = getPossibleDestinations({ x: 0, y: 7 });
    const fromLowerLeftCorner = getPossibleDestinations({ x: 0, y: 0 });
    const fromUpperRightCorner = getPossibleDestinations({ x: 7, y: 7 });
    const fromLowerRightCorner = getPossibleDestinations({ x: 7, y: 0 });

    it('should only have 2 possible moves per corner', () => {
      expect(fromUpperLeftCorner.length).to.be.eq(2);
      expect(fromLowerLeftCorner.length).to.be.eq(2);
      expect(fromUpperRightCorner.length).to.be.eq(2);
      expect(fromLowerRightCorner.length).to.be.eq(2);
    });

    it('should move correctly down and right', () => {
      const expectedDestinations = [
        { x: 2, y: 6 },
        { x: 1, y: 5 },
      ];
      expect(fromUpperLeftCorner).to.deep.eq(expectedDestinations);
    });

    it('should move correctly down and left', () => {
      const expectedDestinations = [
        { x: 5, y: 6 },
        { x: 6, y: 5 },
      ];
      expect(fromUpperRightCorner).to.deep.eq(expectedDestinations);
    });

    it('should move correctly up and right', () => {
      const expectedDestinations = [
        { x: 2, y: 1 },
        { x: 1, y: 2 },
      ];
      expect(fromLowerLeftCorner).to.deep.eq(expectedDestinations);
    });

    it('should move correctly up and left', () => {
      const expectedDestinations = [
        { x: 5, y: 1 },
        { x: 6, y: 2 },
      ];
      expect(fromLowerRightCorner).to.deep.eq(expectedDestinations);
    });
  });
});
