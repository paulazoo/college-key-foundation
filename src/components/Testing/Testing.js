import React, { useState } from 'react';
import { Button, TextField, Grid, CardContent } from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';

// Custom Components

const useStyles = makeStyles((theme) => ({}));

function Testing(props) {
  const classes = useStyles();

  const handleClick = () => {
    props.userLogout();
  };

  return (
    <>
      <PersonalSnackbar />
      <Button onClick={handleClick}>click me to reset and logout</Button>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Testing);
