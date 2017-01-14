const desired = (state = null, action) => {

  switch (action.type) {
    case 'MOVE_TO':
      return action.to;
    default:
      return null;
  }
};

export default desired;
