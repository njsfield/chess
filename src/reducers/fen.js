const Chess = require('chess.js');

const fen = (state = new Chess().fen(), action) => {

  switch (action.type) {
    case 'CONFIRM_MOVE':
      return new Chess(action.fen).move(action.move).fen();
    default:
      return state;
  }
};

export default fen;
