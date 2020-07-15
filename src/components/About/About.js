import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Card,
  Typography,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import Navbar from '../Navbar/Navbar';
import Footer from '../Landing/Footer';
import Team from './Team';
import WordDivider from '../Shared/WordDivider';

// Custom Components

const useStyles = makeStyles((theme) => ({
  wordDivider: {
    fontWeight: 'bold',
    color: theme.palette.common.gray,
  },
}));

function About(props) {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <WordDivider spacing={65}>
        <Typography variant='h3' className={classes.wordDivider}>
          About Us
        </Typography>
      </WordDivider>
      <Team />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
