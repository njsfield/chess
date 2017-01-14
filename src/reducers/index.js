// Reducers
import { combineReducers } from 'redux';

import fen from './fen';
import selected from './selected';
import desired from './desired';


const chessReducers = combineReducers({
  fen,
  selected,
  desired
});

const chessApp = (state, action) => {
  return chessReducers(state, action);
};


export default chessApp;
