import { combineReducers } from 'redux';

// different reducer files
import { initialState } from './initialState';
import homeReducer from './homeReducer';
import userReducer from './userReducer';
import accountReducer from './accountReducer';
import masterReducer from './masterReducer';

const rootReducer = (state, action) => {
  let newState = state;
  if (action.type === 'USER_LOGOUT') {
    localStorage.clear();
    newState = initialState;
  }

  return appReducer(newState, action);
};

const appReducer = combineReducers({
  home: homeReducer,
  user: userReducer,
  account: accountReducer,
  master: masterReducer,
});

export default rootReducer;
