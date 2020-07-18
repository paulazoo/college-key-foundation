import React, { useState } from 'react';
import { Typography, Button, TextField, Grid } from '@material-ui/core';
import DateMomentUtils from '@date-io/moment';
import {
  DateTimePicker,
  KeyboardDateTimePicker,
  MuiPickersUtilsProvider,
} from '@material-ui/pickers';

// Redux

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Custom Components

const useStyles = makeStyles((theme) => ({
  container: {
    display: 'flex',
    flexWrap: 'wrap',
  },
  textField: {
    marginLeft: theme.spacing(1),
    marginRight: theme.spacing(1),
    width: 200,
  },
}));

function EventTime({ startTime, setStartTime, endTime, setEndTime, ...props }) {
  const classes = useStyles();

  return (
    <>
      <MuiPickersUtilsProvider utils={DateMomentUtils}>
        <Grid container direction='row'>
          <Grid item xs={5}>
            <DateTimePicker
              value={startTime}
              onChange={setStartTime}
              label='Start Time'
              fullWidth
              // format="yyyy/MM/dd hh:mm a"
              clearable
            />
          </Grid>
          <Grid item xs={2}>
            <Typography> </Typography>
          </Grid>
          <Grid item xs={5}>
            <DateTimePicker
              fullWidth
              value={endTime}
              onChange={setEndTime}
              label='End Time'
              // format="yyyy/MM/dd hh:mm a"
              clearable
            />
          </Grid>
        </Grid>
      </MuiPickersUtilsProvider>
    </>
  );
}

export default EventTime;
