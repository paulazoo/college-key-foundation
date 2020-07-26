import { initialState } from './initialState';

export default function eventsReducer(state = initialState.events, action) {
  switch (action.type) {
    case 'SET_PUBLICEVENTS':
      return {
        ...state,
        publicEvents: action.payload,
      };

    case 'SET_ALLEVENTS':
      return {
        ...state,
        allEvents: action.payload,
      };

    case 'SET_EVENTS':
      return {
        ...state,
        events: action.payload,
      };

    case 'SET_EVENT':
      return {
        ...state,
        events: {
          ...state.events,
          ...action.payload,
        },
      };

    default:
      return state;
  }
}
