import React from 'react';
import { connect } from 'react-redux';
import { moveTo, stay } from '../actions';

let Tile = ({style, highlighted, position, onClick}) => {
  style = highlighted ? `${style} bg-blue-i pointer` : style;
  return (
    <span className={style}
      onTouchStart={() => onClick()}
      onMouseDown={() => onClick()}
      ></span>
  );
};

const mapStateToProps = ({selected}, {position}) => {
  return {
    highlighted: selected.options.includes(position),
  };
};

const mergeProps = ({ highlighted }, { dispatch }, {style, position }) => {
  return {
    highlighted,
    style,
    position,
    onClick: () => {
      highlighted ?
        dispatch(moveTo(position)) :
        dispatch(stay())
    ;}
  };
};


Tile = connect(
  mapStateToProps,
  null,
  mergeProps
)(Tile);

export default Tile;
