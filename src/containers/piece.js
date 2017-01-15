import React from 'react';
import { connect } from 'react-redux';
import { pieceStyle } from '../css/mapstyles';
import { selectedPiece, moveTo } from '../actions';


let Piece = ({style, fen, name, highlighted, position, newPosition, selected, entity, onClick}) => {
  return (
    <span className={pieceStyle(style, selected, position, newPosition, highlighted)}
          onTouchStart={() => onClick()}
          onMouseDown={() => onClick()}>{entity}</span>
  );
};

const mapStateToProps = ({selected, desired, fen}, {position}) => {
  return {
    selected: selected.position === position,
    highlighted: selected.options.includes(position),
    newPosition: desired,
  };
};


const mergeProps = ({ selected, highlighted, newPosition }, { dispatch }, {style, fen, name, position, entity }) => {
  return {
    selected,
    highlighted,
    newPosition,
    style,
    fen,
    name,
    position,
    entity,
    onClick: () => {
      highlighted ?
        dispatch(moveTo(position)) :
        dispatch(selectedPiece(name, position, fen));
    ;}
  };
};

Piece = connect(
  mapStateToProps,
  null,
  mergeProps
)(Piece);

export default Piece;
