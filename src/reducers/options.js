import { pieceMoves } from '../helpers/fenmap.js';

const selected = (state = [], {type, fen, from}) => {

  switch (type) {
    case 'SELECTED_PIECE':
      return pieceMoves(fen, from);
    case 'CONFIRM_MOVE':
    case 'STAY':
      return [];
    default:
      return state;
  }
};

export default selected;
