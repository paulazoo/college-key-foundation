import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import {
  IconButton,
  Button,
  Grid,
  Tooltip,
  Link,
  Toolbar,
} from '@material-ui/core';
import MuiAppBar from '@material-ui/core/AppBar';

// Redux
import { connect } from 'react-redux';
import { userLogout } from '../../store/actions';

// Theme
import { theme } from '../../theme';
import { makeStyles } from '@material-ui/styles';

// Custom Components
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import LoggedOutNavbar from './LoggedOutNavbar';
import LoggedInNavbar from './LoggedInNavbar';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    fontWeight: 'bold',
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  appBar: {
    height: theme.spacing(15),
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.main,
  },
}));

function DesktopNavbar({ ...props }) {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.common.white;
  }, []);

  return (
    <>
      <PersonalSnackbar />
      {localStorage.getItem('user_token') && props.user.id ? (
        <LoggedInNavbar />
      ) : (
        <LoggedOutNavbar />
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

const mapDispatchToProps = (dispatch) => ({
  userLogout: () => dispatch(userLogout()),
});

export default connect(mapStateToProps, mapDispatchToProps)(DesktopNavbar);
