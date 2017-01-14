import { whiteTileClass, darkTileClass} from '../css/classnames';
import { fenIndexToPos } from '../helpers/fenmap';

const iter = (num) => new Array(num).fill(0);
const floor = Math.floor;

export const tileStyles = iter(64).map((c,i) => {
  let num = floor(i / 8) % 2 ? i + 1 : i;
  let pos = fenIndexToPos(i);
  let style = num % 2 === 0 ? whiteTileClass : darkTileClass;
  return `${style} --${pos}--`;
});
