// Actions

export const selectedPiece = (from, fen) => {
  return {
    type: 'SELECTED_PIECE',
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

export const confirmMove = (fen, move) => {
  return {
    type: 'CONFIRM_MOVE',
    move,
    fen: fen
  };
};

export const stay = () => {
  return {
    type: 'STAY'
  };
};
