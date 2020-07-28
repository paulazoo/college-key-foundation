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
        allEvents: {
          ...state.allEvents,
          ...action.payload,
        },
      };

    case 'DELETE_EVENT':
      const { [action.payload]: _e, ...newEvents } = state.events;
      const { [action.payload]: _ae, ...newAllEvents } = state.allEvents;
      return {
        ...state,
        events: {
          ...newEvents,
        },
        allEvents: {
          ...newAllEvents,
        },
      };

    default:
      return state;
  }
}
