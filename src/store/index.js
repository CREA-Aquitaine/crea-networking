import { createStore, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';

import translate from './reducerTranslate';
import role from './reducerAdmin';
import authenticated from './reducerUser';

const reducers = combineReducers({ translate, role, authenticated });
const store = createStore(reducers, composeWithDevTools());

export default store;
