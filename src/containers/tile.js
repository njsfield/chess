import React from 'react';
import { connect } from 'react-redux';
import { moveTo, stay } from '../actions';
import { optionTileClass } from '../css/classnames';

let Tile = ({style, highlighted, options, position, onClick}) => {
  return (
    <span className={style + ' ' + highlighted}
      onTouchStart={() => onClick()}
      onMouseDown={() => onClick()}
      ></span>
  );
};

const mapStateToProps = ({ options }, {position}) => {
  if (options.includes(position)) {
    return { highlighted: optionTileClass, options };
  } else {
    return { options };
  }
};

const mergeProps = ({ options, highlighted }, { dispatch }, { style, position }) => {
  return {
    style,
    position,
    highlighted,
    onClick: () => {
      options.includes(position) ?
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
