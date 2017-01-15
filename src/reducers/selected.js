import findMoves from '../helpers/findmoves.js';

const selected = (state = {piece: '', position: '', options: []}, {type, fen, piece, from}) => {

  switch (type) {
    case 'SELECTED_PIECE':
      return {
        piece,
        position: from,
        options: findMoves(fen, from)
      };
    case 'CONFIRM_MOVE':
    case 'STAY':
      return {piece: '', position: '', options: []};
    default:
      return state;
  }
};

export default selected;
