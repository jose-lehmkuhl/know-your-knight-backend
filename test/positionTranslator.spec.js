/* eslint-env mocha */

const { expect } = require('chai');
const { algebricToCartesian } = require('../src/utils/positionTranslator');

describe('Utils: positionTranslator tests', () => {
  describe('algebricToCartesian testes', () => {
    it('should reject wrong position formats', () => {
      const translationError1 = algebricToCartesian('a');
      const translationError2 = algebricToCartesian('a12');

      expect(translationError1.error).not.to.be.eq(undefined);
      expect(translationError2.error).not.to.be.eq(undefined);
    });

    it('should accept only a-h x ranges', () => {
      const translationTest1 = algebricToCartesian('a1');
      const translationTest2 = algebricToCartesian('h1');
      const translationError1 = algebricToCartesian('i1');
      const translationError2 = algebricToCartesian('A1');


      expect(translationTest1.error).to.be.eq(undefined);
      expect(translationTest2.error).to.be.eq(undefined);
      expect(translationError1.error).not.to.be.eq(undefined);
      expect(translationError2.error).not.to.be.eq(undefined);
    });

    it('should accept only 1-8 y ranges', () => {
      const translationTest1 = algebricToCartesian('a1');
      const translationTest2 = algebricToCartesian('a8');
      const translationError1 = algebricToCartesian('a0');
      const translationError2 = algebricToCartesian('a9');


      expect(translationTest1.error).to.be.eq(undefined);
      expect(translationTest2.error).to.be.eq(undefined);
      expect(translationError1.error).not.to.be.eq(undefined);
      expect(translationError2.error).not.to.be.eq(undefined);
    });

    it('should successfuly translate algebric to cartesian', () => {
      const translationTest1 = algebricToCartesian('a1');
      const translationTest2 = algebricToCartesian('a8');
      const translationTest3 = algebricToCartesian('h1');
      const translationTest4 = algebricToCartesian('h8');

      expect(translationTest1).to.deep.eq({ x: 0, y: 0 });
      expect(translationTest2).to.deep.eq({ x: 0, y: 7 });
      expect(translationTest3).to.deep.eq({ x: 7, y: 0 });
      expect(translationTest4).to.deep.eq({ x: 7, y: 7 });
    });
  });
});
