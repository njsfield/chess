const desiredMove = (state = new Chess().fen(), action) => {

  switch (action.type) {
    case 'SET_POSITIONS':
      return new Chess(action.fen).move({from: action.from, to: action.to});
    default:
      return state;
  }
};

export default makeFen;
