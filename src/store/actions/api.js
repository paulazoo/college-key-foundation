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
  setAllEvents,
  deleteEvent,
  setMasterAccount,
  setIsMaster,
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

          dispatch(setIsMaster(response.account.email));

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
        // dispatch(
        //   setPersonalSnackbar({
        //     open: true,
        //     content: 'Log in error, please refresh the page',
        //   })
        // );
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
    };
    api(`accounts/${getState().account.account.id}`, requestOptions)
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
    };
    api(`accounts`, requestOptions)
      .then((response) => {
        const preAccounts = {};
        response.forEach((account) => {
          preAccounts[account.id] = account;
        });

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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
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

export const getAllEvents = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
    };
    api(`events`, requestOptions)
      .then((response) => {
        const preAllEvents = {};
        response.forEach((event) => {
          preAllEvents[event.id] = event;
        });

        dispatch(setAllEvents(preAllEvents));
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
    };
    api(`accounts/${getState().account.account.id}/events`, requestOptions)
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`newsletter_emails`, requestOptions)
      .then((response) => {
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
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
              content: `Mentor with email ${body.email} was added! Please refresh the page.`,
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
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
              content: `Mentee with email ${body.email} was added! Please refresh the page.`,
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
      body: JSON.stringify(body),
    };
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

export const postUnmatch = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`mentees/${body.mentee_id}/unmatch`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: 'Mentee and mentor unmatched!',
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`events`, requestOptions)
      .then((response) => {
        dispatch(setEvent({ [response.id]: response }));
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

// Google Sheets Import and Exports (POST):
export const postImportMenteeMentor = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
      body: JSON.stringify({}),
    };
    api(`google_sheets/import_mentee_mentor`, requestOptions)
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

export const postImportEvents = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
      body: JSON.stringify({}),
    };
    api(`google_sheets/import_events`, requestOptions)
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

export const postExportRegistered = (eventId) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
      body: JSON.stringify({
        event_id: eventId,
      }),
    };
    api(`google_sheets/export_registered`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Database exported into google sheets!`,
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const postExportJoined = (eventId) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
      body: JSON.stringify({
        event_id: eventId,
      }),
    };
    api(`google_sheets/export_joined`, requestOptions)
      .then((response) => {
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: `Database exported into google sheets!`,
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
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
//         Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
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
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`accounts/${getState().account.account.id}`, requestOptions)
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

export const putMasterAccount = (body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
      body: JSON.stringify(body),
    };
    api(`accounts/master_update`, requestOptions)
      .then((response) => {
        dispatch(setMasterAccount(response));
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: 'Profile details saved! Please refresh the page.',
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const putEvent = (eventId, body) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
      body: JSON.stringify(body),
    };
    console.log(body);
    console.log(requestOptions);
    api(`events/${eventId}`, requestOptions)
      .then((response) => {
        dispatch(setEvent({ [response.id]: response }));
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: 'Event updated!',
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

// DELETE Calls:
export const deleteEventApi = (eventId) => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'DELETE',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${sessionStorage.getItem('user_token')}`,
      },
    };
    api(`events/${eventId}`, requestOptions)
      .then((response) => {
        dispatch(deleteEvent(eventId));
        dispatch(
          setPersonalSnackbar({
            open: true,
            content: 'Event deleted!',
          })
        );
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};
