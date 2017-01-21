import { player, canMove, pieceMoves, prepFen } from './fenmap';
import Chess from 'chess.js';

// Returns array or empty array
export const pieceTotal = (fen, piece) => {
  let arr = prepFen(fen).join("").match(new RegExp(piece, 'g')) || [];
  return arr.length;
};

// Returns array of objects with (from & to)
export const getMoves = (fen) => {

  let flatten = (arr) => [].concat(...arr);

  let twoDimArr =
        canMove(fen, player(fen))
          .map(moveable => pieceMoves(fen, moveable)
            .map(newPos => { return {from: moveable, to: newPos};}));
  return flatten(twoDimArr);

};

// Simplified Evaluate Function
export const evaluate = (fen) => {
  let whosGo = new Chess(fen).turn(); // Returns 'w' or 'b'

  let materialScore =
    (200   * (pieceTotal(fen,'K') - pieceTotal(fen,'k'))) +
    (9     * (pieceTotal(fen,'Q') - pieceTotal(fen,'q'))) +
    (5     * (pieceTotal(fen,'R') - pieceTotal(fen,'r'))) +
    (3     * (pieceTotal(fen,'N') - pieceTotal(fen,'n'))) +
    (3     * (pieceTotal(fen,'B') - pieceTotal(fen,'b'))) +
    (1     * (pieceTotal(fen,'P') - pieceTotal(fen,'p')));

   let mobilityScore = 0.1 * (getMoves(fen).length);

   return (materialScore + mobilityScore) * (whosGo === 'w' ? 1 : -1);
};



// newFenFromMove
export const newFenFromMove = (fen, move) => {
  let newPos = new Chess(fen);
  newPos.move(move);
  return newPos.fen();
};


// Make negaMax
export const negaMax = (depth, fen) => {
    if ( depth === 0 ) return evaluate(fen);
    let max = -Infinity;
    let moves = getMoves(fen);
    let bestMove;
    for (let move of moves)  {
        let newFen = newFenFromMove(fen, move);
        let score = -(negaMax(depth - 1, newFen));
        if( score > max )
            max = score;
            bestMove = move;
    }
    return bestMove;
};











// Default Export
export const bestMove = (fen) => negaMax(3, fen);
