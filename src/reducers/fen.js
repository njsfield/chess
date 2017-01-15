const Chess = require('chess.js');

const fen = (state = new Chess().fen(), {type, fen, move}) => {

  switch (type) {
    case 'CONFIRM_MOVE':
      let newPos = new Chess(fen);
      newPos.move(move);
      return newPos.fen();
    default:
      return state;
  }
};

export default fen;
