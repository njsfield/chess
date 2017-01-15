import Chess from 'chess.js';
import { fenIndexToPos } from '../helpers/fenmap.js';

const findMoves = (fen, pos, array = []) => {
  for (let i = 1; i <= 64; i+=1) {
    let move = new Chess(fen).move({from: pos, to: fenIndexToPos(i)});
    if (move ) array.push(move.to);
  }
  return array;
};

export default findMoves;
