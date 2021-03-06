import { initialState } from './initialState';

export default function userReducer(state = initialState.user, action) {
  switch (action.type) {
    case 'SET_USER':
      return action.payload;

    default:
      return state;
  }
}
