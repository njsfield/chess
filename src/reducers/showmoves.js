import findMoves from '../helpers/findmoves.js';

const visibleMoves = (state = [], action) => {

  switch (action.type) {
    case 'SHOW_MOVES_FOR_PIECE':
      return findMoves(action.fen, action.pos);
    default:
      return state;
  }
};

export default visibleMoves;
