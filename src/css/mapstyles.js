import { whiteTileClass,
        darkTileClass,
        pieceClass,
        submitClass,
        whiteMovedMod,
        blackMovedMod,
        whiteTargettedMod,
        blackTargettedMod,
        whiteSelectedMod,
        blackSelectedMod} from '../css/classnames';
import { fenIndexToPos, pieceCode } from '../helpers/fenmap';

const iter = (num) => new Array(num).fill(0);
const floor = Math.floor;
const pieceSequence = 'RNBQKBNRPPPPPPPPpppppppprnbqkbnr';

export const tileStyles = iter(64).map((c,i) => {
  let num = floor(i / 8) % 2 ? i + 1 : i;
  let pos = fenIndexToPos(i);
  let style = num % 2 === 0 ? whiteTileClass : darkTileClass;
  return {
    style: `${style} --${pos}--`,
    position: pos
  };
});

export const pieceStyles = iter(32).map((c,i) => {
  let num = i > 15 ? i + 32 : i;
  let pos = fenIndexToPos(num);
  return {
    style: `${pieceClass}`,
    entity: pieceCode[pieceSequence[i]],
    name: pieceSequence[i],
    position: pos
  };
});

export const pieceStyle = (state, name, position) => {
  const white = /[A-Z]/.test(name);
  const base = pieceClass;
  position = `--${position}--`;
  let color;
  switch(state) {
    case 'SELECTED' : { color = white ? whiteSelectedMod : blackSelectedMod; break; }
    case 'MOVED'  : { color = white ? whiteMovedMod : blackMovedMod; break; }
    case 'TARGETTED' : { color = white ? whiteTargettedMod : blackTargettedMod ; break; }
    default : { color = `black`; }
  }
  return `${base} ${color} ${position}`;
};

export const submitStyle = (from, to) => {
  return from && to ?
    `${submitClass} db` :
    `${submitClass} dn`;
};
