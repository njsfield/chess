import findMoves from '../helpers/findmoves.js';

const selected = (state = [], action) => {

  switch (action.type) {
    case 'SELECTED_PIECE':
      return {
        piece: action.piece,
        position: action.position,
        options: findMoves(action.fen, action.position)
      };
    case 'CONFIRM_MOVE':
    case 'STAY':
      return null;
    default:
      return state;
  }
};

export default selected;
