import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import language from './reducers';
import isAdministrator from './reducerAdmin';

const reducers = combineReducers({ language, isAdministrator });
const store = createStore(reducers, composeWithDevTools());

export default store;
