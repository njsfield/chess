// Actions
import { player, canMove, pieceMoves } from '../helpers/fenmap';

// Random, Floor
const rand = Math.random;
const floor = Math.floor;


export const selectedPiece = (from, fen) => {
  return {
    type: 'SELECTED_PIECE',
    from,
    fen
  };
};

export const moveTo = (to) => {
  return {
    type: 'MOVE_TO',
    to
  };
};

export const buildMove = (fen, from, to) => {
  return {
    type: 'CONFIRM_MOVE',
    move: {from, to},
    fen
  };
};

// Opponent Moves
export const opponentMove = (dispatch, getState) => {
  let { fen } = getState();
  let duration = 700;
  let availables = canMove(fen, 'black');
  let pieceChoice = availables[floor(rand() * availables.length)];
  let pieceOptions = pieceMoves(fen, pieceChoice);
  let moveChoice = pieceOptions[floor(rand() * pieceOptions.length)];
  // 1. Make Choice
  setTimeout(() => {
    dispatch(selectedPiece(pieceChoice, fen));
  }, duration * 1);
  // 2. Move Piece
  setTimeout(() => {
    dispatch(moveTo(moveChoice));
  }, duration * 2);
  // 3. Confirm
  setTimeout(() => {
    dispatch(buildMove(fen, pieceChoice, moveChoice));
  }, duration * 3);

};



export const confirmMove = () => (dispatch, getState) => {
  let {selected, desired, fen} = getState();
  if (player(fen) === "white") {
    dispatch(buildMove(fen, selected, desired));
    opponentMove(dispatch, getState);
  } 
};



export const stay = () => {
  return {
    type: 'STAY'
  };
};
