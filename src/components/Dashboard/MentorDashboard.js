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
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';

// Custom Components

const useStyles = makeStyles((theme) => ({}));

function MentorDashboard(props) {
  const classes = useStyles();

  return (
    <>
      <Typography>Your Mentees:</Typography>
      {props.user.mentees.map((mentee) => (
        <Card>
          <Typography>{`Name: ${mentee.account.name}`}</Typography>
          <Typography>{`Email: ${mentee.account.email}`}</Typography>
          <Typography>{`Phone: ${mentee.account.phone}`}</Typography>
          <Typography>{`Bio: ${mentee.account.bio}`}</Typography>
        </Card>
      ))}
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MentorDashboard);
