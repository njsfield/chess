import React from 'react';
import { connect } from 'react-redux';
import { pieceStyle } from '../css/mapstyles';
import { pieceAction } from '../actions/thunks';


let Piece = ({state, position, moved, name, entity, onClick}) => {
  return (
      <span className={pieceStyle(state, name, moved || position)}
            onTouchStart={() => onClick(state, position)}
            onMouseDown={() => onClick(state, position)}>{entity}</span>
  );
};

const mapStateToProps = ({selected, options, desired}, {position}) => {
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

// ConfirmMove move is thunk
const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (state, position) => dispatch(pieceAction(state, position))
  };
};

Piece = connect(
  mapStateToProps,
  mapDispatchToProps
)(Piece);

export default Piece;
