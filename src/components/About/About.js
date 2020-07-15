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

// Custom Components

const useStyles = makeStyles((theme) => ({}));

function About(props) {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <Card>
        <Typography>About Us Page</Typography>
      </Card>
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
