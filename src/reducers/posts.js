const initial = {
  items: []
};

export default (state = initial, { type, value }) => {
  switch (type) {
    case 'POSTS/SET_POSTS':
      return { ...state, items: value };
    default:
      return state;
  }
};
