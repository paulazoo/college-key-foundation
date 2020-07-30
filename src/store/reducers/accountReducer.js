import { initialState } from './initialState';

export default function accountReducer(state = initialState.account, action) {
  switch (action.type) {
    case 'SET_ISMASTER':
      let newIsMaster = false;
      if (
        action.payload === 'paulazhu@college.harvard.edu' ||
        action.payload === 'collegekeyfoundation@gmail.com' ||
        action.payload === 'snalani731@gmail.com' ||
        action.payload === 'llin1@college.harvard.edu' ||
        action.payload === 'lindalin2812@gmail.com'
      ) {
        newIsMaster = true;
      }

      return {
        ...state,
        isMaster: newIsMaster,
      };

    case 'SET_ACCOUNT':
      return action.payload;

    default:
      return state;
  }
}
