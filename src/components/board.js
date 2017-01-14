import React from 'react';
import Tile from '../containers/tile';
import { tileStyles } from '../helpers/tilestyles';
import { boardClass } from '../css/classnames';

const Board = (count) => (
  <div className={boardClass}>
    {tileStyles.map((style,i) =>
      <Tile style={style} key={i} />
    )}
  </div>
);

export default Board;
