const initialState = { country: 'France' };

const language = (state = initialState, action) => {
  switch (action.type) {
    case 'FRANCE':
      return { country: 'France' };
    case 'SPAIN':
      return { country: 'Spain' };
    case 'BASQUE':
      return { country: 'Basque' };
    default:
      return { ...state };
  }
};

export default language;
