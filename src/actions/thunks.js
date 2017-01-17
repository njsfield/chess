import { stay, moveTo, confirmMove, selectedPiece } from './index';
import { bestMove } from '../helpers/bestmove';
import delay from '../helpers/delay';

// Opponent Move
const opponentMove = (dispatch, getState) => {
  let { fen }  = getState();
  let { from, to } = bestMove(fen);
  let speed = 500;
  delay(() => { dispatch(selectedPiece(from, fen)); }, speed)
  .delay(() => { dispatch(moveTo(to)); }, speed)
   .delay(() => { dispatch(confirmMove(fen, from, to)); }, speed);
};

// Make Move
export const pieceAction = (state, position) => (dispatch, getState) => {
  let {selected, desired, fen} = getState();

  switch (state) {
    case 'STATIC' : {
      dispatch(selectedPiece(position, fen));
      break;
    }
    case 'TARGETTED' : {
      dispatch(moveTo(position));
      break;
    }
    case 'MOVED' : {
      dispatch(confirmMove(fen, selected, desired));
      opponentMove(dispatch, getState);
      break;
    }
    default: return;
  }
};

// Tile Action
export const tileAction = (position) => (dispatch, getState) => {
  let { options } = getState();
  if (options.includes(position)) {
    dispatch(moveTo(position));
  } else {
    dispatch(stay());
  }
};
