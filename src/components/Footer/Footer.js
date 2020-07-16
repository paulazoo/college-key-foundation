import React from 'react';
import { Grid, Container, Typography, Link } from '@material-ui/core';

// Redux

// Theme
import { makeStyles } from '@material-ui/core/styles';
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import FooterSocialMedia from './FooterSocialMedia';

// Custom Components

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.primary.main,
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: theme.palette.common.white,
  },
  socialMediaContainer: {
    textAlign: 'center',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Grid container direction='row' spacing={0} justify='space-between'>
        <Grid item xs={3}>
          <Grid container direction='row' alignItems='center' justify='center'>
            <Typography className={classes.text}>
              © Copyright 2020 College Key Foundation
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction='row' alignItems='center' justify='center'>
            <Typography className={classes.text}>
              Made with 💗 by College Key Foundation
            </Typography>
          </Grid>
        </Grid>
        <Grid item xs={3}>
          <Grid container direction='row' alignItems='center' justify='center'>
            <Link href='/terms' className={classes.text}>
              Privacy Policy & Terms of Use
            </Link>
          </Grid>
        </Grid>
        <FooterSocialMedia />
      </Grid>
    </div>
  );
}
