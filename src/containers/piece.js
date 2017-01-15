import React from 'react';
import { connect } from 'react-redux';
import { pieceStyle } from '../css/mapstyles';
import { selectedPiece, moveTo, confirmMove } from '../actions';


let Piece = ({state, position, moved, name, entity, onClick}) => {
  return (
      <span className={pieceStyle(state, name, moved || position)}
            onTouchStart={() => onClick()}
            onMouseDown={() => onClick()}>{entity}</span>
  );
};

const mapStateToProps = ({selected, options, desired, fen}, {position}) => {
 if (options.includes(position)) {
    return { state : 'TARGETTED'};
  } else if (selected === position && desired) {
      return { state : 'MOVED', moved: desired};
  } else if (selected === position) {
    return { state : 'SELECTED'};
  } else {
    return { state: 'STATIC'};
  }
};


const mergeProps = ({ state, moved, desired }, { dispatch }, {name, fen, position, entity }) => {
  return {
    state, name, position, entity, moved,
    onClick: () => {
      switch (state) {
        case 'STATIC' : return dispatch(selectedPiece(position, fen));
        case 'TARGETTED' : return dispatch(moveTo(position));
        case 'MOVED' : return dispatch(confirmMove(fen, {from: position, to: moved}));
        default: return;
      }
    }
  };
};

Piece = connect(
  mapStateToProps,
  null,
  mergeProps
)(Piece);

export default Piece;
