export const initialState = {
  // set up default audio and video devices
  user: {
    user_type: 'Mentee',
  },
  account: {},
  home: {
    personalSnackbar: {
      open: false,
      content: '',
    },
    currentlyLoading: false,
  },
  master: {
    accounts: [],
    mentors: {},
    mentees: {},
    newsletterEmails: [],
  },
};
