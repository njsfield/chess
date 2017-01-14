import { fenMap } from './fenMap';

// Start of game
it('At start of game, returns array of Objects with all pieces', () => {
  let testObj1 = {
    color: 'white',
    key: 'P',
    code: '\u2659',
    position: 'f2'
  };
  let testObj2 = {
    color: 'black',
    key: 'p',
    code: '\u265F',
    position: 'e7'
  };
  let testObj3 = {
    color: 'black',
    key: 'r',
    code: '\u265C',
    position: 'h8'
  };

  let testFen = 'rnbqkbnr/pppppppp/8/8/8/8/PPPPPPPP/RNBQKBNR w KQkq - 0 1';
  expect(fenMap(testFen).length).toBe(32);
  expect(fenMap(testFen)).toContainEqual(testObj1);
  expect(fenMap(testFen)).toContainEqual(testObj2);
  expect(fenMap(testFen)).toContainEqual(testObj3);
});

// Mid game
it('Mid game, returns only pieces left', () => {
  let testObj1 = {
    color: 'black',
    key: 'p',
    code: '\u265F',
    position: 'd7'
  };

  let testFen = 'rnbqkbnr/ppp1pppp/8/3P4/8/8/PPPP1PPP/RNBQKBNR b KQkq - 0 2';
  expect(fenMap(testFen).length).toBe(31);
  expect(fenMap(testFen)).not.toContainEqual(testObj1);
});
