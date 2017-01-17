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

export const confirmMove = (fen, from, to) => {
  return {
    type: 'CONFIRM_MOVE',
    move: {from, to},
    fen
  };
};

export const stay = () => {
  return {
    type: 'STAY'
  };
};
