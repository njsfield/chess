// fenMap
// ======
// Input = rnbqkbnr/ppp1pppp/8/3P4/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2
// Output = [{color, key, code, position}...]

// Helpers

const isCap = (i) => /[A-Z]/.test(i);
const ifit = (x, a, b) => x ? a : b;

const prepFen = (str) =>
  str.replace(/\d/g, i => i.repeat(+i))
     .substring(0, 71)
     .split('/')
     .reverse()
     .join('')
     .split('');

export const pieceCode = {
  // White
  R: '\u2656',
  N: '\u2658',
  B: '\u2657',
  Q: '\u2655',
  K: '\u2654',
  P: '\u2659',
  // black
  r: '\u265C',
  n: '\u265E',
  b: '\u265D',
  q: '\u265B',
  k: '\u265A',
  p: '\u265F'
};

// 4 >> e1
export const fenIndexToPos = (i) => `${'abcdefgh'[i % 8]}${Math.floor(i / 8) + 1}`;

// rnbqkbnr/ppp1pppp/8/3P4/ >> [{color, key, code, position}...]
export const fenMap = (fen) => prepFen(fen).map((piece, i) => {
  return {
    color: ifit(isCap(piece), 'white', 'black'),
    key: piece,
    code: pieceCode[piece],
    position: fenIndexToPos(i)
  };
}).filter(i => i.code);
