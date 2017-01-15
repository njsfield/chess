import React from 'react';
import { connect } from 'react-redux';
import { submitStyle } from '../css/mapstyles';
import { stay, confirmMove } from '../actions';

let Submit = ({fen, from, to, onClick}) => {
  return (
    <button className={submitStyle(from, to)}
          onTouchStart={() => onClick()}
          onMouseDown={() => onClick()}>Submit</button>
  );
};

const mapStateToProps = ({selected, desired, fen}) => {
  return {
    fen: fen,
    from: selected.position,
    to: desired
  };
};


const mergeProps = ({ fen, from, to }, { dispatch }) => {
  return {
    fen,
    from,
    to,
    onClick: () => {
      from && to ?
        dispatch(confirmMove(fen, {from, to})) :
        dispatch(stay());}
  };
};

Submit = connect(
  mapStateToProps,
  null,
  mergeProps
)(Submit);

export default Submit;
