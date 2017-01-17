import { player, canMove, pieceMoves } from './fenmap';

// Takes Fen, returns Object with from and to
// Over time, refactor and build to improve logic, machine learning etc
const rand = Math.random;
const floor = Math.floor;

export const bestMove = (fen) => {
  let availables = canMove(fen, player(fen));
  let from = availables[floor(rand() * availables.length)];
  let pieceOptions = pieceMoves(fen, from);
  let to = pieceOptions[floor(rand() * pieceOptions.length)];
  return {
    from,
    to
  };
};
