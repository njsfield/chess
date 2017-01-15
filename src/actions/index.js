// Actions

export const selectedPiece = (piece, from, fen) => {
  return {
    type: 'SELECTED_PIECE',
    piece,
    from,
    fen
  };
};

export const moveTo = (to) => {
  return {
    type: 'MOVE_TO',
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
