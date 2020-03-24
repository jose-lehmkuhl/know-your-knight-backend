
const algebricXTranslator = {
  a: 0,
  b: 1,
  c: 2,
  d: 3,
  e: 4,
  f: 5,
  g: 6,
  h: 7,
};

const positionInvalid = { error: 'Invalid Position.' };

const getCartesianX = (algebricX) => {
  const x = algebricXTranslator[algebricX];

  if (x > 7 || x < 0 || x === undefined) return null;

  return x;
};

const getCartesianY = (algebricY) => {
  const y = algebricY - 1;

  if (y > 7 || y < 0 || Number.isNaN(y)) return null;

  return y;
};

const algebricToCartesian = (algebricPosition) => {
  if (algebricPosition.length !== 2) return positionInvalid;

  const slicedPositions = algebricPosition.slice('');
  const x = getCartesianX(slicedPositions[0]);
  const y = getCartesianY(slicedPositions[1]);

  if (x === null || y === null) return positionInvalid;

  return { x, y };
};

const cartesianToAlgebric = ({ x, y }) => '';

module.exports = { algebricToCartesian, cartesianToAlgebric };
