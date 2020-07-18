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

function MenteeDashboard(props) {
  const classes = useStyles();

  return (
    <>
      <Typography>Your Mentor:</Typography>
      <Card>
        <Typography>{`Name: ${props.user.mentor.account.name}`}</Typography>
        <Typography>{`Email: ${props.user.mentor.account.email}`}</Typography>
        <Typography>{`Phone: ${props.user.mentor.account.phone}`}</Typography>
        <Typography>{`College: ${props.user.mentor.account.school}`}</Typography>
        <Typography>{`Graduation Year: ${props.user.mentor.account.grad_year}`}</Typography>
        <Typography>{`Bio: ${props.user.mentor.account.bio}`}</Typography>
      </Card>
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

export default connect(mapStateToProps, mapDispatchToProps)(MenteeDashboard);
