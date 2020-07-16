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
import Footer from '../Landing/Footer';
import Navbar from '../Navbar/Navbar';

const useStyles = makeStyles((theme) => ({
  wordDivider: {
    fontWeight: 'bold',
    color: theme.palette.common.gray,
  },
}));

function Dashboard(props) {
  const classes = useStyles();

  const history = useHistory();

  return (
    <>
      <Navbar />
      <Grid container direction='row' alignItems='center' justify='center'>
        <Typography>Dashboard</Typography>
      </Grid>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    getLogin: (userToken, callback) => dispatch(getLogin(userToken, callback)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard);