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
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import { getLogin } from '../../store/actions/api';

// Custom Components
import WordDivider from '../Shared/WordDivider';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';
import MentorDashboard from './MentorDashboard';
import MenteeDashboard from './MenteeDashboard';

const useStyles = makeStyles((theme) => ({
  wordDivider: {
    fontWeight: 'bold',
    color: theme.palette.common.gray,
  },
  card: {
    margin: theme.spacing(8),
    padding: theme.spacing(8),
    height: '100vh',
  },
  textContainer: {
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 48,
  },
}));

function Dashboard(props) {
  const classes = useStyles();

  const history = useHistory();

  return (
    <>
      <Navbar />
      <Grid container direction='row' alignItems='center' justify='center'>
        <Grid item xs={12}>
          <Card className={classes.card}>
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='center'
              spacing={3}
            >
              <Grid item xs={12}>
                <Typography className={classes.text}>
                  {`Welcome, ${props.account.name}!`}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {props.account.user_type === 'Mentor' ? (
                  <MentorDashboard />
                ) : (
                  <MenteeDashboard />
                )}
              </Grid>
            </Grid>
          </Card>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  account: state.account,
  user: state.user,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    getLogin: (userToken, callback) => dispatch(getLogin(userToken, callback)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);
