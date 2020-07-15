import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';

// Custom Components
import Navbar from '../Navbar/Navbar';
import HomepageLayout from './HomepageLayout';
import Footer from './Footer';

const backgroundImage =
  'https://www.insidehighered.com/sites/default/server_files/media/image_4.png';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  explainPaper: {
    backgroundImage: '',
    // 'url("https://images.pexels.com/photos/116720/pexels-photo-116720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
    backgroundColor: theme.palette.primary.main,
    backgroundPosition: 'center',
    color: 'white',
    paddingTop: '4vw',
    paddingRight: '10vw',
    paddingLeft: '10vw',
    paddingBottom: '4vw',
  },
  button: {
    minWidth: 200,
    // marginTop: theme.spacing(8)
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
}));

function Landing(props) {
  const classes = useStyles();

  return (
    <>
      <Navbar />
      <HomepageLayout backgroundClassName={classes.background}>
        {/* Increase the network loading priority of the background image. */}
        <img
          style={{ display: 'none' }}
          src={backgroundImage}
          alt='increase priority'
        />
        <Typography color='inherit' align='center' variant='h2' marked='center'>
          Now is the time for hope.
        </Typography>
      </HomepageLayout>
      <Typography>
        yoyoyo my name is paula zhu and my teeth hurt so fricken bad
        <br />
        <br />
        <br />
      </Typography>
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

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
