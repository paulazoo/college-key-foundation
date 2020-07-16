import { initialState } from './initialState';

export default function homeReducer(state = initialState.home, action) {
  switch (action.type) {
    case 'SET_PERSONALSNACKBAR':
      return {
        ...state,
        personalSnackbar: { ...action.payload },
      };

    default:
      return state;
  }
}
