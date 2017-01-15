import findMoves from '../helpers/findmoves.js';

const selected = (state = [], {type, fen, from}) => {

  switch (type) {
    case 'SELECTED_PIECE':
      return findMoves(fen, from);
    case 'CONFIRM_MOVE':
    case 'STAY':
      return [];
    default:
      return state;
  }
};

export default selected;
