const initialState = { language: 'France' };

const translate = (state = initialState, action) => {
  switch (action.type) {
    case 'FRANCE':
      return { language: 'France' };
    case 'SPAIN':
      return { language: 'Spain' };
    case 'BASQUE':
      return { language: 'Basque' };
    default:
      return { ...state };
  }
};

export default translate;
