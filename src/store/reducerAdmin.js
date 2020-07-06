const initialState = { isRole: '' };

const role = (state = initialState, action) => {
  switch (action.type) {
    case 'ADMIN':
      return { isRole: 'admin' };
    case 'USER':
      return { isRole: 'user' };
    case 'DISCONNECT':
      return { isRole: '' };
    default:
      return { ...state };
  }
};

export default role;
