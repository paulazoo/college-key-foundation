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

const useStyles = makeStyles((theme) => ({}));

function EmailNewsletter(props) {
  const classes = useStyles();

  return (
    <>
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item>
          <Typography>Sign up for our email newsletter!</Typography>
        </Grid>
        <Grid item xs={12} />
        <Grid item>
          <TextField
            variant='outlined'
            label='Your Email'
            placeholder='example@gmail.com'
          />
        </Grid>
        <Grid item>
          <Button color='secondary' variant='contained'>
            Submit!
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EmailNewsletter);
