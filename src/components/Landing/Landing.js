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
  'https://img1.looper.com/img/gallery/locke-key-season-2-release-date-cast-and-plot/intro-1583844452.jpg';

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
  boldHomeText: {
    fontWeight: 'bold',
  },
  textDiv: {
    textAlign: 'right',
    width: '100%',
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
        <div className={classes.textDiv}>
          <Typography
            color='inherit'
            variant='h2'
            className={classes.boldHomeText}
          >
            NOW IS THE TIME FOR HOPE
            <br />
          </Typography>
          <Typography
            color='inherit'
            variant='h3'
            className={classes.boldHomeText}
          >
            SHARE YOUR VOICE
          </Typography>
        </div>
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
