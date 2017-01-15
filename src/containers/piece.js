import React from 'react';
import { connect } from 'react-redux';
import { selectedPiece } from '../actions';

let Piece = ({style, fen, name, position, selected, entity, onClick}) => {
  style = selected ? `${style} red` : style;
  return (
    <span className={style} onClick={() => onClick()}>{entity}</span>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    selected: state.selected.position === ownProps.position,
    fen: state.fen
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => dispatch(selectedPiece(ownProps.name, ownProps.position, ownProps.fen))
  };
};

Piece = connect(
  mapStateToProps,
  mapDispatchToProps
)(Piece);

export default Piece;
