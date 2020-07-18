import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import GoogleLogin from 'react-google-login';
import MuiAlert from '@material-ui/lab/Alert';
import {
  Button,
  Grid,
  Box,
  Container,
  Typography,
  Snackbar,
  Card,
  Divider,
  CircularProgress,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import {
  userLogout,
  setUser,
  setCurrentlyLoading,
} from '../../store/actions/index';
import { getLogin } from '../../store/actions/api';

// Custom Components
import WordDivider from '../Shared/WordDivider';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  wordDivider: {
    fontWeight: 'bold',
    color: theme.palette.common.gray,
  },
  loginCard: {
    margin: theme.spacing(8),
    padding: theme.spacing(8),
    height: '40vh',
  },
  loginTextContainer: {
    textAlign: 'center',
  },
  loginText: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  applyLink: {
    color: theme.palette.primary.main,
  },
  spacing: {
    height: theme.spacing(1),
  },
}));

function LoginPage(props) {
  const classes = useStyles();

  const history = useHistory();

  const [errorDisplayOpen, setErrorDisplayOpen] = useState(false);
  const [errorText, setErrorText] = useState(
    'Login error. Please refresh the page to try again'
  );

  const handleSnackbarClose = (e, reason) => {
    if (reason === 'clickaway') {
      return;
    }
    setErrorDisplayOpen(false);
  };

  const handleApplyLink = () => {
    history.push('/apply');
  };

  const responseGoogle = (response) => {
    props.setCurrentlyLoading(true);
    localStorage.setItem('user_token', response.tokenId);
    props.getLogin(response.tokenId);
  };

  const responseGoogleErrors = (response) => {
    switch (response.error) {
      case 'popup_closed_by_user':
        break;
      case 'idpiframe_initialization_failed':
        setErrorText('Login error- ensure that cookies are enabled to login.');
      default:
        setErrorDisplayOpen(true);
    }
  };

  const renderGoogleLogin = () => {
    return (
      <GoogleLogin
        clientId='322643072137-r7mupmjsg74h6g16o6k5vpi7cgsqvlmq.apps.googleusercontent.com'
        buttonText='Log in with Google'
        onSuccess={responseGoogle}
        onFailure={responseGoogleErrors}
        cookiePolicy='single_host_origin'
      />
    );
  };

  const renderLogin = () => {
    if (props.currentlyLoading === true) {
      return (
        <Grid item xs={12}>
          <CircularProgress />
        </Grid>
      );
    }

    return (
      <>
        <Grid item xs={12} className={classes.loginTextContainer}>
          <Typography className={classes.loginText}>
            Mentee / Mentor Login
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.loginTextContainer}>
          <Typography>
            Don't have an account?
{' '}
            <a className={classes.applyLink} onClick={handleApplyLink}>
              {' '}
              Apply today!
{' '}
            </a>
          </Typography>
        </Grid>
        <Grid item xs={12}>
          <div className={classes.spacing} />
        </Grid>
        <Grid item xs={12}>
          <Divider />
        </Grid>
        <Grid item xs={12}>
          <div className={classes.spacing} />
        </Grid>
        <Grid item>
          <Box>{renderGoogleLogin()}</Box>
        </Grid>
      </>
    );
  };

  return (
    <>
      <Snackbar
        open={errorDisplayOpen}
        autoHideDuration={6000}
        onClose={handleSnackbarClose}
      >
        <MuiAlert
          elevation={6}
          variant='filled'
          onClose={handleSnackbarClose}
          severity='error'
        >
          {errorText}
        </MuiAlert>
      </Snackbar>
      <Navbar />
      <Grid container direction='row' alignItems='center' justify='center'>
        <Grid item xs={6}>
          <Card className={classes.loginCard}>
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='center'
              spacing={3}
            >
              {props.user.id ? (
                <Grid item xs={12} className={classes.loginTextContainer}>
                  <Typography className={classes.loginText}>
                    You are logged in!
                  </Typography>
                </Grid>
              ) : (
                renderLogin()
              )}
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  currentlyLoading: state.home.currentlyLoading,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    getLogin: (userToken) => dispatch(getLogin(userToken)),
    setCurrentlyLoading: (currentlyLoading) =>
      dispatch(setCurrentlyLoading(currentlyLoading)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
