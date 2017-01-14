import findMoves from './findmoves';

it('returns an array of positions from fen and position', () => {
  // Pawn
  let testFen = 'rnbqkbnr/ppp1pppp/8/3P4/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2';
  expect(findMoves(testFen, 'f7')).toContain('f5');
  expect(findMoves(testFen, 'f7')).toContain('f6');
  expect(findMoves(testFen, 'f7').length).toBe(2);
  // Knight
  expect(findMoves(testFen, 'g8')).toContain('f6');
  expect(findMoves(testFen, 'g8')).toContain('h6');
  expect(findMoves(testFen, 'g8').length).toBe(2);
  // King
  expect(findMoves(testFen, 'e8')).toEqual(['d7']);
});

it('returns an empty array if wrong player tries to move', () => {
  let testFen = 'rnbqkbnr/ppp1pppp/8/3P4/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2';
  expect(findMoves(testFen, 'e1')).toEqual([]);
});


it('returns empty array with bad fen', () => {
  let badTestFen = 'rnbqkbnr/ppp1pppp/8/3P4/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0';
  expect(findMoves(badTestFen, 'f7')).toEqual([]);
});
