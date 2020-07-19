import { initialState } from './initialState';

export default function eventsReducer(state = initialState.events, action) {
  switch (action.type) {
    case 'SET_PUBLICEVENTS':
      return {
        ...state,
        publicEvents: action.payload,
      };

    default:
      return state;
  }
}
