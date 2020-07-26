export const initialState = {
  // set up default audio and video devices
  user: {
    user_type: 'Mentee',
  },
  account: {},
  home: {
    onMobile: false,
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
  events: {
    publicEvents: {},
    events: {},
    allEvents: {},
  },
};
