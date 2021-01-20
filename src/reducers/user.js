const initial = {
  name: '',
  email: ''
};

export default (state = initial, { type, value }) => {
  switch (type) {
    case 'USER/SET_USER':
      return { ...state, ...value };
    default:
      return state;
  }
};
