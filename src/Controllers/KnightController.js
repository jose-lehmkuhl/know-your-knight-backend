const { cartesianToAlgebraic, algebraicToCartesian } = require('../utils/positionTranslator');

const KnightController = {};

KnightController.moveList = [
//   upRight: {
  /* oneCellY: */ { x: 2, y: 1 },
  /* twoCellsY: */ { x: 1, y: 2 },
  //   },
  //   upLeft: {
  /* oneCellY: */ { x: -2, y: 1 },
  /* twoCellsY: */ { x: -1, y: 2 },
  //   },
  //   downRight: {
  /* oneCellY: */ { x: 2, y: -1 },
  /* twoCellsY: */ { x: 1, y: -2 },
  //   },
  // downLeft: {
  /* oneCellY: */ { x: -2, y: -1 },
  /* twoCellsY: */ { x: -1, y: -2 },
  // },
];

KnightController.getPossibleDestinations = ({ x: currentX, y: currentY }) => {
  const possibleMoves = [];
  KnightController.moveList.forEach(({ x, y }) => {
    const nextX = x + currentX;
    if (nextX < 0 || nextX > 7) return;
    const nextY = y + currentY;
    if (nextY < 0 || nextY > 7) return;

    possibleMoves.push({ x: currentX + x, y: currentY + y });
  });

  return possibleMoves;
};

KnightController.get2turnsDestination = (req, res) => {
  const { position: currentPosition } = req.query;

  if (!currentPosition) return res.status(400).json({ error: 'Missing parameter: position.' });

  const currentCartesian = algebraicToCartesian(currentPosition);
  if (currentCartesian.error) return res.status(400).json(currentCartesian);

  const nextRoundPositions = KnightController.getPossibleDestinations(currentCartesian);
  const responseDestinations = [];

  nextRoundPositions.forEach((nextRoundPosition) => {
    const nextRoundDestinations = KnightController.getPossibleDestinations(nextRoundPosition);
    const algebraicPositions = nextRoundDestinations.map(cartesianToAlgebraic);
    if (algebraicPositions[0].error) return res.status(400).json(algebraicPositions);

    return responseDestinations.push(...algebraicPositions);
  });

  return res.json(responseDestinations);
};

module.exports = KnightController;
