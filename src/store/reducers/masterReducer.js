import { initialState } from './initialState';

export default function masterReducer(state = initialState.master, action) {
  switch (action.type) {
    case 'SET_ACCOUNTS':
      return {
        ...state,
        accounts: action.payload,
      };

    case 'SET_MENTORS':
      return {
        ...state,
        mentors: action.payload,
      };

    case 'SET_MENTEES':
      return {
        ...state,
        mentees: action.payload,
      };

    default:
      return state;
  }
}
