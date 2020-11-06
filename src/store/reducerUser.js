export const AUTHENTICATED = 'AUTHENTICATED';
export const USERINFOS = 'USERINFOS';

const initialState = { token: '', userInfos: [] };

const authenticated = (state = initialState, action) => {
  switch (action.type) {
    case 'AUTHENTICATED':
      return { ...state, token: action.payload };
    case 'USERINFOS':
      return { ...state, userInfos: action.payload };
    // TODO: change disconnect reducerAdmin & reducerUser
    // case 'DISCONNECT':
    //   return { initialState };
    default:
      return { ...state };
  }
};

export default authenticated;
