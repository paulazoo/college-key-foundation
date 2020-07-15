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

// const image3 = require('../../assets/landingImg3.png');

const useStyles = makeStyles((theme) => ({
  imgResponsive: {
    height: 'auto',
    width: 'auto',
    maxWidth: '80vw',
    maxHeight: '500px',
  },
  title: {
    width: '30rem',
    maxWidth: '80vw',
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    color: '#183951',
  },
  threeContainer: {
    padding: theme.spacing(4),
  },
  textGrid: {
    textAlign: 'center',
  },
  text: {
    width: '30rem',
    maxWidth: '80vw',
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: '#183951',
  },
  item: {
    padding: theme.spacing(4),
  },
}));

function Three(props) {
  const classes = useStyles();

  return (
    <Grid
      container
      direction='row'
      className={classes.threeContainer}
      spacing={5}
    >
      <Grid item xs={4} className={classes.item}>
        <Grid
          container
          direction='column'
          justify='space-around'
          alignItems='center'
        >
          <Grid item>
            <img className={classes.imgResponsive} alt='weekly seminars' />
          </Grid>
          <Grid item>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
              spacing={2}
            >
              <Grid item className={classes.textGrid}>
                <Typography className={classes.title}>
                  WEEKLY SEMINARS
                </Typography>
              </Grid>
              <Grid item className={classes.textGrid}>
                <Typography className={classes.text}>
                  From standardized testing with by prominent authors of
                  Kaplan’s testing material to college apps, college admissions
                  with Admissions Officers from top universities, to financial
                  aid and FAFSA.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} className={classes.item}>
        <Grid
          container
          direction='column'
          justify='space-around'
          alignItems='center'
        >
          <Grid item>
            <img className={classes.imgResponsive} alt='weekly seminars' />
          </Grid>
          <Grid item>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
              spacing={2}
            >
              <Grid item className={classes.textGrid}>
                <Typography className={classes.title}>
                  WEEKLY SEMINARS
                </Typography>
              </Grid>
              <Grid item className={classes.textGrid}>
                <Typography className={classes.text}>
                  From standardized testing with by prominent authors of
                  Kaplan’s testing material to college apps, college admissions
                  with Admissions Officers from top universities, to financial
                  aid and FAFSA.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} className={classes.item}>
        <Grid
          container
          direction='column'
          justify='space-around'
          alignItems='center'
        >
          <Grid item>
            <img className={classes.imgResponsive} alt='weekly seminars' />
          </Grid>
          <Grid item>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
              spacing={2}
            >
              <Grid item className={classes.textGrid}>
                <Typography className={classes.title}>
                  WEEKLY SEMINARS
                </Typography>
              </Grid>
              <Grid item className={classes.textGrid}>
                <Typography className={classes.text}>
                  From standardized testing with by prominent authors of
                  Kaplan’s testing material to college apps, college admissions
                  with Admissions Officers from top universities, to financial
                  aid and FAFSA.
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Three);
