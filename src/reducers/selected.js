const selected = (state = '', {type, from}) => {

  switch (type) {
    case 'SELECTED_PIECE':
      return from;
    case 'CONFIRM_MOVE':
    case 'STAY':
      return '';
    default:
      return state;
  }
};

export default selected;
