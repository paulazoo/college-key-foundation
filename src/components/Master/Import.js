import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';

// Custom Components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import { postImport } from '../../store/actions/api';

const useStyles = makeStyles((theme) => ({
  importButton: {
    fontSize: 32,
    fontWeight: 'bold',
  },
}));

function Import(props) {
  const classes = useStyles();

  const handleImport = () => {
    props.postImport();
  };

  return (
    <>
      <Grid item xs={12}>
        <Grid container direction='row' alignItems='center' justify='center'>
          <Grid item>
            <Button
              color='secondary'
              variant='contained'
              onClick={handleImport}
              className={classes.importButton}
            >
              IMPORT GOOGLE SHEETS DATA INTO DATABASE
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  account: state.account,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    postImport: () => dispatch(postImport()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Import);
