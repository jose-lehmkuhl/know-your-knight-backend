/* eslint-env mocha */

const { expect } = require('chai');
const { algebraicToCartesian, cartesianToAlgebraic } = require('../src/utils/positionTranslator');

describe('Utils: positionTranslator tests', () => {
  describe('algebraicToCartesian tests', () => {
    it('should reject wrong position formats', () => {
      const translationError1 = algebraicToCartesian('A');
      const translationError2 = algebraicToCartesian('A12');

      expect(translationError1.error).not.to.be.eq(undefined);
      expect(translationError2.error).not.to.be.eq(undefined);
    });

    it('should accept only a-h x ranges', () => {
      const translationTest1 = algebraicToCartesian('A1');
      const translationTest2 = algebraicToCartesian('H1');
      const translationError1 = algebraicToCartesian('I1');
      const translationError2 = algebraicToCartesian('a1');


      expect(translationTest1.error).to.be.eq(undefined);
      expect(translationTest2.error).to.be.eq(undefined);
      expect(translationError1.error).not.to.be.eq(undefined);
      expect(translationError2.error).not.to.be.eq(undefined);
    });

    it('should accept only 1-8 y ranges', () => {
      const translationTest1 = algebraicToCartesian('A1');
      const translationTest2 = algebraicToCartesian('A8');
      const translationError1 = algebraicToCartesian('A0');
      const translationError2 = algebraicToCartesian('A9');


      expect(translationTest1.error).to.be.eq(undefined);
      expect(translationTest2.error).to.be.eq(undefined);
      expect(translationError1.error).not.to.be.eq(undefined);
      expect(translationError2.error).not.to.be.eq(undefined);
    });

    it('should successfuly translate algebric to cartesian', () => {
      const translationTest1 = algebraicToCartesian('A1');
      const translationTest2 = algebraicToCartesian('A8');
      const translationTest3 = algebraicToCartesian('H1');
      const translationTest4 = algebraicToCartesian('H8');

      expect(translationTest1).to.deep.eq({ x: 0, y: 0 });
      expect(translationTest2).to.deep.eq({ x: 0, y: 7 });
      expect(translationTest3).to.deep.eq({ x: 7, y: 0 });
      expect(translationTest4).to.deep.eq({ x: 7, y: 7 });
    });
  });

  describe('cartesianToAlgebraic tests', () => {
    it('should accept only 0-7 x ranges', () => {
      const translationError1 = cartesianToAlgebraic({ x: -1, y: 0 });
      const translationError2 = cartesianToAlgebraic({ x: 8, y: 0 });
      const translationTest1 = cartesianToAlgebraic({ x: 0, y: 0 });
      const translationTest2 = cartesianToAlgebraic({ x: 7, y: 0 });

      expect(translationError1.error).not.to.be.eq(undefined);
      expect(translationError2.error).not.to.be.eq(undefined);
      expect(translationTest1.error).to.be.eq(undefined);
      expect(translationTest2.error).to.be.eq(undefined);
    });

    it('should accept only 0-7 y ranges', () => {
      const translationError1 = cartesianToAlgebraic({ x: 0, y: -1 });
      const translationError2 = cartesianToAlgebraic({ x: 0, y: 8 });
      const translationTest1 = cartesianToAlgebraic({ x: 0, y: 0 });
      const translationTest2 = cartesianToAlgebraic({ x: 0, y: 7 });

      expect(translationError1.error).not.to.be.eq(undefined);
      expect(translationError2.error).not.to.be.eq(undefined);
      expect(translationTest1.error).to.be.eq(undefined);
      expect(translationTest2.error).to.be.eq(undefined);
    });

    it('should successfuly translate cartesian to algebric', () => {
      const translationTest1 = cartesianToAlgebraic({ x: 0, y: 0 });
      const translationTest2 = cartesianToAlgebraic({ x: 0, y: 7 });
      const translationTest3 = cartesianToAlgebraic({ x: 7, y: 0 });
      const translationTest4 = cartesianToAlgebraic({ x: 7, y: 7 });

      expect(translationTest1).to.be.eq('A1');
      expect(translationTest2).to.be.eq('A8');
      expect(translationTest3).to.be.eq('H1');
      expect(translationTest4).to.be.eq('H8');
    });
  });
});
