import React, { useState } from 'react';
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
import SkinnyEventCard from './SkinnyEventCard';

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

function EventsList({ events, ...props }) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <Grid container direction='column' spacing={1}>
          {events
            .sort(
              (a, b) =>
                (a.start_time != null) - (b.start_time != null) ||
                moment(a.start_time) - moment(b.start_time)
            )
            .map((event) => (
              <Grid item xs={12}>
                <SkinnyEventCard event={event} />
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
