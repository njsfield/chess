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

const pieceCode = {
  // White
  R: '&#9814;',
  N: '&#9816',
  B: '&#9815;',
  Q: '&#9813;',
  K: '&#9812;',
  P: '&#9817;',
  // black
  r: '&#9820;',
  n: '&#9822',
  b: '&#9821;',
  q: '&#9820;',
  k: '&#9819;',
  p: '&#9823;'
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
