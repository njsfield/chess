import React from 'react';
import { connect } from 'react-redux';
import { pieceStyle } from '../css/mapstyles';
import { selectedPiece } from '../actions';


let Piece = ({style, fen, name, position, newPosition, selected, entity, onClick}) => {
  return (
    <span className={pieceStyle(style, selected, position, newPosition)}
          onTouchStart={() => onClick()}
          onMouseDown={() => onClick()}>{entity}</span>
  );
};

const mapStateToProps = ({selected, desired, fen}, {position}) => {
  return {
    selected: selected.position === position,
    newPosition: desired,
    fen: fen
  };
};

const mapDispatchToProps = (dispatch, {name, position, fen}) => {
  return {
    onClick: () => dispatch(selectedPiece(name, position, fen))
  };
};

Piece = connect(
  mapStateToProps,
  mapDispatchToProps
)(Piece);

export default Piece;
