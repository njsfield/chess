import React from 'react';
import Tile from './tile';
import Piece from './piece';
import { connect } from 'react-redux';
import { tileStyles } from '../css/mapstyles';
import { fenMap } from '../helpers/fenmap.js';
import { boardClass, pieceClass } from '../css/classnames';

let Board = ({fen}) => (
  <div className={boardClass}>
    {tileStyles.map((x,i) =>
      <Tile style={x.style} key={i} position={x.position} />
    )}
    {fenMap(fen).map((x, i) =>
      <Piece style={pieceClass} fen={fen} color={x.color} key={i} name={x.key} position={x.position} entity={x.code}/>
    )}
  </div>
);

let mapStateToProps = ({fen}) => {
  return {
    fen: fen
  };
};


Board = connect(
  mapStateToProps,
  null
)(Board);


export default Board;
