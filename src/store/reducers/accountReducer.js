import { initialState } from './initialState';

export default function accountReducer(state = initialState.account, action) {
  switch (action.type) {
    case 'SET_ACCOUNT':
      return action.payload;

    default:
      return state;
  }
}
