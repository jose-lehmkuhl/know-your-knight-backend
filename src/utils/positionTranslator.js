
const algebraicXTranslator = {
  A: 0,
  B: 1,
  C: 2,
  D: 3,
  E: 4,
  F: 5,
  G: 6,
  H: 7,
};

const positionInvalid = { error: 'Invalid Position.' };

const getCartesianX = (algebricX) => {
  const x = algebraicXTranslator[algebricX];

  if (x > 7 || x < 0 || x === undefined) return null;

  return x;
};

const getCartesianY = (algebraicY) => {
  const y = algebraicY - 1;

  if (y > 7 || y < 0 || Number.isNaN(y)) return null;

  return y;
};

const algebraicToCartesian = (algebraicPosition) => {
  if (algebraicPosition.length !== 2) return positionInvalid;

  const slicedPositions = algebraicPosition.slice('');
  const x = getCartesianX(slicedPositions[0]);
  const y = getCartesianY(slicedPositions[1]);

  if (x === null || y === null) return positionInvalid;

  return { x, y };
};

const cartesianToAlgebraic = ({ x, y }) => {
  if (x > 7 || x < 0) return { error: `Failed translating x: ${x} to algebric` };
  if (y > 7 || y < 0) return { error: `Failed translating y: ${y} to algebric` };

  const algebraicX = 'ABCDEFGH'[x];
  const algebraicY = y + 1;

  return `${algebraicX}${algebraicY}`;
};

module.exports = { algebraicToCartesian, cartesianToAlgebraic };
