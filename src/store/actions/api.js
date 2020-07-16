/* eslint-disable import/prefer-default-export */
import history from '../history';

import { setUser, setAccount, setPersonalSnackbar } from './index';
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

          history.push('/dashboard');
        } else if (response.message === 'You are not a mentor or mentee!') {
          dispatch(
            setPersonalSnackbar({ open: true, content: response.message })
          );
        }

        callback(response);
      })
      .catch((error) => {
        console.error('API Error: ', error);
      });
  };
};

export const getUser = () => {
  return (dispatch, getState) => {
    const requestOptions = {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        Authorization: `Bearer ${localStorage.getItem('user_token')}`,
      },
    };
    api(`users/${getState().user.id}`, requestOptions)
      .then((response) => {
        // dispatch to set state
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
