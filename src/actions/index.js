// Actions

export const selectedPiece = (piece, from) => {
  return {
    type: 'SELECTED_PIECE',
    piece,
    from
  };
};

export const moveTo = (to) => {
  return {
    type: 'SELECTED_PIECE',
    to
  };
};

export const confirmMove = () => {
  return {
    type: 'CONFIRM_MOVE',
  };
};

export const stay = () => {
  return {
    type: 'STAY'
  };
};
