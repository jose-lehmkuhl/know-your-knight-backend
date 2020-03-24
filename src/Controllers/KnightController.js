const KnightController = {};

KnightController.moveList = {
  upRight: {
    oneCellY: { x: 2, y: 1 },
    twoCellsY: { x: 1, y: 2 },
  },
  upLeft: {
    oneCellY: { x: -2, y: 1 },
    twoCellsY: { x: -1, y: 2 },
  },
  downRight: {
    oneCellY: { x: 2, y: -1 },
    twoCellsY: { x: 1, y: -2 },
  },
  downLeft: {
    oneCellY: { x: -2, y: -1 },
    twoCellsY: { x: -1, y: -2 },
  },
};


module.exports = KnightController;
