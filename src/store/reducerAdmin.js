const initialState = { isAdmin: true };

const isAdministrator = (state = initialState, action) => {
  switch (action.type) {
    case 'ADMIN':
      return { isAdmin: true };
    case 'USER':
      return { isAdmin: false };
    default:
      return { ...state };
  }
};

export default isAdministrator;
