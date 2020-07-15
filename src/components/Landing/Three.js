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
    width: '15rem',
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'bold',
    fontSize: 24,
    color: theme.palette.common.gray,
  },
  textGrid: {
    textAlign: 'center',
  },
  text: {
    width: '15rem',
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    fontSize: 14,
    color: theme.palette.common.gray,
  },
}));

function Three(props) {
  const classes = useStyles();

  return (
    <Grid container direction='row' justify='space-between' spacing={0}>
      <Grid item xs={1} />
      <Grid item xs={3}>
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <img
              src={require('../../assets/calGrad.PNG')}
              className={classes.imgResponsive}
              alt='weekly seminars'
            />
          </Grid>
          <Grid item className={classes.textGrid}>
            <Typography className={classes.title}>WEEKLY SEMINARS</Typography>
          </Grid>
          <Grid item className={classes.textGrid}>
            <Typography className={classes.text}>
              College Key Foundation's weekly seminars cover a multitude of
              subjects, including standardized testing led by a prominent author
              of Kaplan’s testing material to college apps, led by Admissions
              Officers from top universities and even financial aid and FAFSA.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={3}>
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <img
              src={require('../../assets/tableGrad.PNG')}
              className={classes.imgResponsive}
              alt='one-on-one mentorship'
            />
          </Grid>
          <Grid item className={classes.textGrid}>
            <Typography className={classes.title}>
              ONE-ON-ONE MENTORSHIP
            </Typography>
          </Grid>
          <Grid item className={classes.textGrid}>
            <Typography className={classes.text}>
              Our program matches rising high school seniors to college students
              of similar backgrounds. College mentors can help answer questions,
              proofread essays and applications, and personally guide mentees
              through the process.
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={3}>
        <Grid container direction='column' alignItems='center'>
          <Grid item>
            <img
              src={require('../../assets/computerGrad.PNG')}
              className={classes.imgResponsive}
              alt='optional workshops'
            />
          </Grid>
          <Grid item className={classes.textGrid}>
            <Typography className={classes.title}>
              OPTIONAL WORKSHOPS
            </Typography>
          </Grid>
          <Grid item className={classes.textGrid}>
            <Typography className={classes.text}>
              Our optional workshops are designed to provide additional support
              in essay-writing, scholarship-searching, and local university
              admissions to those interested.
            </Typography>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={1} />
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
