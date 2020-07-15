import React from 'react';
import { Grid, Container, Typography, Link } from '@material-ui/core';

// Redux

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    backgroundColor: theme.palette.background,
  },
  container: {
    height: theme.spacing(8),
    display: 'flex',
    padding: 0,
    paddingRight: theme.spacing(8),
  },
  text: {
    fontFamily: theme.typography.fontFamily,
    fontStyle: 'normal',
    fontWeight: 'normal',
    color: 'white',
  },
}));

export default function Footer() {
  const classes = useStyles();

  return (
    <Typography component='footer' className={classes.root}>
      <Container className={classes.container}>
        <Grid
          container
          direction='row'
          alignItems='center'
          justify='space-between'
        >
          <Grid item>
            <Typography className={classes.text}>
              © Copyright 2020 College Key Foundation
            </Typography>
          </Grid>
          <Grid item>
            <Typography className={classes.text}>
              Made with 💗 by College Key Foundation
            </Typography>
          </Grid>
          <Grid item>
            <Link href='/terms' className={classes.text}>
              Privacy Policy & Terms of Use
            </Link>
          </Grid>
        </Grid>
      </Container>
    </Typography>
  );
}
