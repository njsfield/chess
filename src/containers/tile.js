import React from 'react';
import { connect } from 'react-redux';
import { tileAction } from '../actions/thunks';
import { optionTileClass } from '../css/classnames';

let Tile = ({style, highlighted, options, position, onClick}) => {
  return (
    <span className={style + ' ' + highlighted}
      onTouchStart={() => onClick(position)}
      onMouseDown={() => onClick(position)}
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

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (position) => dispatch(tileAction(position))
    };
};


Tile = connect(
  mapStateToProps,
  mapDispatchToProps
)(Tile);

export default Tile;
