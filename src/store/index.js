import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import language from './reducers';

const reducers = combineReducers({ language });
const store = createStore(reducers, composeWithDevTools());

export default store;
