import findMoves from '../helpers/findmoves.js';

const selected = (state = {piece: '', position: '', options: []}, action) => {

  switch (action.type) {
    case 'SELECTED_PIECE':
      return {
        piece: action.piece,
        position: action.from,
        options: findMoves(action.fen, action.from)
      };
    case 'CONFIRM_MOVE':
    case 'STAY':
      return {piece: '', position: '', options: []};
    default:
      return state;
  }
};

export default selected;
