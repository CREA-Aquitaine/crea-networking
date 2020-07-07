import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import language from './reducerLanguage';
import role from './reducerAdmin';
import authenticated from './reducerUser';

const reducers = combineReducers({ language, role, authenticated });
const store = createStore(reducers, composeWithDevTools());

export default store;
