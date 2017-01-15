import React from 'react';
import { connect } from 'react-redux';

let Tile = ({style, selected, position}) => {
  style = selected ? `${style} bg-blue-i pointer` : style;
  return (
    <span className={style}></span>
  );
};

const mapStateToProps = (state, ownProps) => {
  return {
    selected: state.selected.options.indexOf(ownProps.position) > -1 ||
              state.selected.position === ownProps.position
  };
};

Tile = connect(
  mapStateToProps,
  null
)(Tile);

export default Tile;
