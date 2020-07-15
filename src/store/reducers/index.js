import { combineReducers } from 'redux';

// different reducer files
import { initialState } from './initialState';
import homeReducer from './homeReducer';
import userReducer from './userReducer'

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
  user: userReducer
});

export default rootReducer;
