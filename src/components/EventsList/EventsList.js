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
import EventCard from './EventCard';

// Custom Components

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(8),
    padding: theme.spacing(8),
    height: '40vh',
  },
  textContainer: {
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
}));

const DUMMYEVENTS = [
  {
    name: 'Dummy Name',
    link: 'www.harvard.zoom.us/j/dummyzoom',
    kind: 'open',
    host: 'Random Host',
    description:
      'This is a dummy event! This is a dummy description, yeah yeah yeah. Im hungry and here are some words.',
  },
  {
    name: 'Dummy Name two',
    link: 'www.harvard.zoom.us/j/dummyzoom',
    kind: 'open',
    host: 'Random Host',
    description:
      'This is a dummy event! This is a dummy description, yeah yeah yeah. Im hungry and here are some words.',
  },
  {
    name: 'Dummy Name three',
    link:
      'https://stanford.zoom.us/j/91633490237?pwd=MFAzSnhQb0hMc0lrMFFuVzRWZEJhQT09',
    kind: 'open',
    host: 'Random Host',
    description:
      'This is a dummy event! This is a dummy description, yeah yeah yeah. Im hungry and here are some words.',
  },
  {
    name: 'Dummy Name',
    link:
      'https://stanford.zoom.us/j/91633490237?pwd=MFAzSnhQb0hMc0lrMFFuVzRWZEJhQT09',
    kind: 'open',
    host: 'Random Host',
    description:
      'This is a dummy event! This is a dummy description, yeah yeah yeah. Im hungry and here are some words.',
  },
];

function EventsList(props) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <Grid container direction='column' spacing={1}>
          {DUMMYEVENTS.map((event) => (
            <Grid item xs={12}>
              <EventCard event={event} />
            </Grid>
          ))}
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
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventsList);
