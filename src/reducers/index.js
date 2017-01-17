// Reducers
import { combineReducers } from 'redux';

import fen from './fen';
import selected from './selected';
import options from './options';
import desired from './desired';


const chessReducers = combineReducers({
  fen,
  selected,
  options,
  desired
});

export default chessReducers;
