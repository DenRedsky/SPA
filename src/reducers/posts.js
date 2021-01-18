const initial = {
  posts: []
};

export default (state = initial, { type, value }) => {
  switch (type) {
    case 'POSTS/SET_POSTS':
      return { ...state, posts: value };
    default:
      return state;
  }
};
