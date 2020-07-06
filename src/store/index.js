import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import language from './reducers';
import role from './reducerAdmin';

const reducers = combineReducers({ language, role });
const store = createStore(reducers, composeWithDevTools());

export default store;
