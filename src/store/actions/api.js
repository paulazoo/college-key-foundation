/* eslint-disable import/prefer-default-export */
import history from '../history';

import {
  setUser,
  setAccount,
  setPersonalSnackbar,
  setMentees,
  setMentors,
  setAccounts,
  setNewsletterEmails,
  setCurrentlyLoading,
  setPublicEvents,
  setEvents,
  setEvent,
} from './index';
import { wsConnect } from './websocket';

const api = (path, requestOptions) => {
  return fetch(`${process.env.REACT_APP_API_URL}${path}`, requestOptions).then(
    (res) => {
      // check for error response
      if (!res.ok) {
        // get error message from body or default to response status
        const error = res.status;
        return Promise.reject(error);
      }
      // otherwise return json response
      return res.json();
    }
  );
};

// TODO: fill out error catch with error handler, currentlyLoading
// Order of possible arguments: path, body, callback
// Each api call gets its own action
// Api Calls:

// GET Calls:
export const getLogin = (userToken, callback) => {
  return (dispatch) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${userToken}`,
      },
    };
    api(`login`, requestOptions)
      .then((response) => {
        if (response.message === 'Logged in successfully!') {
          dispatch(setPersonalSnackbar({ open: false, content: '' }));
          dispatch(setAccount(response.account));
          dispatch(setUser(response.user));
          dispatch(setCurrentlyLoading(false));

          history.push('/dashboard');

          callback(response.account);
        } else if (response.message === 'You are not a mentor or mentee!') {
          dispatch(
            setPersonalSnackbar({ open: true, content: response.message })
          );
          dispatch(setCurrentlyLoading(false));
        }
      })
      .catch((error) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: 'Log in error, please refresh the page',
          })
        );
        dispatch(setCurrentlyLoading(false));
        console.error('API Error: ', error);
      });
  };
};

export const getAccount = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    };
    api(`accounts/${getState().account.id}`, requestOptions)
      .then((response) => {
        dispatch(setAccount(response.account));
        dispatch(setUser(response.user));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getAccounts = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    };
    api(`accounts`, requestOptions)
      .then((response) => {
        dispatch(setAccounts(response));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getMentors = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    };
    api(`mentors`, requestOptions)
      .then((response) => {
        const preMentors = {};
        response.forEach((mentor) => {
          preMentors[mentor.id] = mentor;
        });
        dispatch(setMentors(preMentors));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getMentees = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    };
    api(`mentees`, requestOptions)
      .then((response) => {
        const preMentees = {};
        response.forEach((mentee) => {
          preMentees[mentee.id] = mentee;
        });
        dispatch(setMentees(preMentees));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getNewsletterEmails = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    };
    api(`newsletter_emails`, requestOptions)
      .then((response) => {
        dispatch(setNewsletterEmails(response));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getPublicEvents = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    };
    api(`events/public`, requestOptions)
      .then((response) => {
        const prePublicEvents = {};
        response.forEach((event) => {
          prePublicEvents[event.id] = event;
        });

        dispatch(setPublicEvents(prePublicEvents));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getEvents = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    };
    api(`accounts/${getState().account.id}/events`, requestOptions)
      .then((response) => {
        const preEvents = {};
        response.forEach((event) => {
          preEvents[event.id] = event;
        });

        dispatch(setEvents(preEvents));
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

// POST Calls:
export const postNewsletterEmails = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`newsletter_emails`, requestOptions)
      .then((response) => {
        console.log(response);
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Your email ${response.email} was added to our newsletter list!`,
          })
        );
        // dispatch to set state
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postMentors = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`mentors`, requestOptions)
      .then((response) => {
        if (response.message === 'Account already exists') {
          dispatch(
            setPersonalSnackbar({
              open: true,
              content: `Error: Account with email ${body.email} already exists!`,
            })
          );
        } else {
          dispatch(
            setPersonalSnackbar({
              open: true,
              content: `Mentor with email ${body.email} was added!`,
            })
          );
        }
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postMentees = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`mentees`, requestOptions)
      .then((response) => {
        if (response.message === 'Account already exists') {
          dispatch(
            setPersonalSnackbar({
              open: true,
              content: `Error: Account with email ${body.email} already exists!`,
            })
          );
        } else {
          dispatch(
            setPersonalSnackbar({
              open: true,
              content: `Mentee with email ${body.email} was added!`,
            })
          );
        }
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postMatch = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
      body: JSON.stringify(body),
    };
    console.log(requestOptions);
    api(`mentees/${body.mentee_id}/match`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: 'Mentee and mentor matched!',
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postEvents = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`events`, requestOptions)
      .then((response) => {
        console.log(response);
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Event ${body.name} created!`,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postImport = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
      body: JSON.stringify({
        file_name: 'testing0',
      }),
    };
    api(`mentees/import`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Google sheets data imported into database!`,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postRegister = (eventId) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
      body: JSON.stringify({}),
    };
    api(`events/${eventId}/register`, requestOptions)
      .then((response) => {
        dispatch(
          setEvent({
            [response.id]: response,
          })
        );

        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Registered!`,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postUnregister = (eventId) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
      body: JSON.stringify({}),
    };
    api(`events/${eventId}/unregister`, requestOptions)
      .then((response) => {
        dispatch(
          setEvent({
            [response.id]: response,
          })
        );

        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Unregistered!`,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postJoin = (eventId) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
      body: JSON.stringify({}),
    };
    api(`events/${eventId}/join`, requestOptions)
      .then((response) => {
        dispatch(
          setEvent({
            [response.id]: response,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postPublicRegister = (eventId, body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`events/${eventId}/public_register`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Registered!`,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

// export const postPublicUnregister = (eventId) => {
//   return (dispatch, getState) => {
//     const requestOptions = {
//       method: 'POST',
//       headers: {
//         'Content-Type': 'application/json',
//         Accept: 'application/json',
//         Authorization: `Bearer ${localStorage.getItem('user_token')}`,
//       },
//       body: JSON.stringify({}),
//     };
//     api(`events/${eventId}/unregister`, requestOptions)
//       .then((response) => {
//         dispatch(
//           setEvent({
//             [response.id]: response,
//           })
//         );

//         dispatch(
//           setPersonalSnackbar({
//             open: true,
//             content: `Unregistered!`,
//           })
//         );
//       })
//       .catch((error) => {
//         console.error('API Error: ', error);
//       });
//   };
// };

export const postPublicJoin = (eventId) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
      body: JSON.stringify({}),
    };
    api(`events/${eventId}/public_join`, requestOptions)
      .then((response) => {})
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

// PUT Calls:
export const putAccount = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
      body: JSON.stringify(body),
    };
    console.log(requestOptions);
    api(`accounts/${getState().account.id}`, requestOptions)
      .then((response) => {
        dispatch(setAccount(response));
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: 'Profile details saved!',
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};
