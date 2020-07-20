import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
} from '@material-ui/core';
import moment from 'moment';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import EventCard from './EventCard';
import EventsList from './EventsList';
import { getPublicEvents } from '../../store/actions/api';

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

function Public(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getPublicEvents();
  }, []);

  return (
    <>
      {props.publicEvents && props.publicEvents.length > 0 ? (
        <EventsList
          events={props.publicEvents.filter((e) =>
            moment().isBefore(moment(e.end_time))
          )}
        />
      ) : (
        <Typography>No Upcoming Public Events</Typography>
      )}
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  account: state.account,
  publicEvents: state.events.publicEvents,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    getPublicEvents: () => dispatch(getPublicEvents()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Public);
