
import { combineReducers } from 'redux';

import queriesReducer from './queriesReducer';
import resourcesReducer from './resourcesReducer';

const dataReducer = combineReducers({
  queries: queriesReducer,
  resources: resourcesReducer,
});

export default dataReducer;
