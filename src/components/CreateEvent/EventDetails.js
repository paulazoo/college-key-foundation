import React, { useState, useEffect } from 'react';
import {
  Typography,
  TextField,
  Card,
  Button,
  CardHeader,
  Grid,
  CardContent,
  Select,
  MenuItem,
  FormControl,
  Box,
} from '@material-ui/core';
import moment from 'moment';

// Redux
import { connect } from 'react-redux';
import { postEvents } from '../../store/actions/api';

// Theme
import { makeStyles } from '@material-ui/core/styles';
import { theme } from '../../theme';

// Custom Components
import EventTime from './EventTime';

const useStyles = makeStyles((theme) => ({
  alignRight: {
    display: 'flex',
    flexDirection: 'row-reverse',
    alignItems: 'center',
    paddingLeft: 2,
  },
  dBlock: {
    display: 'block',
  },
  dNone: {
    display: 'none',
  },
  headText: {
    color: theme.palette.primary.dark,
    fontSize: 20,
    fontWeight: 'bold',
  },
}));

function EventDetails(props) {
  const classes = useStyles();
  const [eventName, setEventName] = useState('');
  const [eventHost, setEventHost] = useState('');
  const [eventKind, setEventKind] = useState('open');
  const [eventDescription, setEventDescription] = useState('');
  const [eventLink, setEventLink] = useState('');
  const [startTime, setStartTime] = useState(null);
  const [endTime, setEndTime] = useState(null);
  const [notPossible, setNotPossible] = useState(false);
  const inputs = [
    {
      value: eventName,
      label: 'Name',
      valueName: 'eventName',
      placeholder: 'Event Name',
      disabled: false,
    },
    {
      value: eventKind,
      label: 'Event Access',
      valueName: 'eventKind',
      options: ['Public', 'Invite-Only'],
      optionValues: ['open', 'invite_only'],
    },
    {
      value: eventHost,
      label: 'Hosted by',
      valueName: 'eventHost',
      placeholder: 'Event Host',
      disabled: false,
    },
    {
      value: eventDescription,
      label: 'Description',
      valueName: 'eventDescription',
      placeholder: 'Description of Event',
      disabled: false,
    },
    {
      value: eventLink,
      label: 'Link',
      valueName: 'eventLink',
      placeholder: 'www.harvard.zoom.us/j/example',
      disabled: false,
    },
  ];

  const handleChange = (e) => {
    const { name, value } = e.target;

    switch (name) {
      case 'eventName': {
        setEventName(value);
        break;
      }
      case 'eventHost': {
        setEventHost(value);
        break;
      }
      case 'eventKind': {
        setEventKind(value);
        break;
      }
      case 'eventDescription': {
        setEventDescription(value);
        break;
      }
      case 'eventLink': {
        setEventLink(value);
        break;
      }
      default:
        throw new Error('No branch selected in switch statement.');
    }
  };

  const onSubmit = () => {
    if (
      (endTime != null &&
        startTime != null &&
        moment(endTime) > moment(startTime)) ||
      (endTime === null && startTime === null)
    ) {
      setNotPossible(false);

      // Ruby on rails cant PUT null times
      let start_time = startTime;
      let end_time = endTime;
      if (startTime === null) {
        start_time = [];
        end_time = [];
      }

      props.postEvents({
        name: eventName,
        host: eventHost,
        kind: eventKind,
        description: eventDescription,
        link: eventLink,
        start_time,
        end_time,
      });
    } else {
      setNotPossible(true);
    }
  };

  return (
    <>
      <CardContent style={{ padding: 60, paddingTop: 18, paddingBottom: 40 }}>
        <Grid container direction='row' spacing={3}>
          {inputs.map((element) =>
            element.label !== 'Event Access' ? (
              <React.Fragment key={element.label}>
                <Grid
                  item
                  xs={3}
                  style={{
                    display: 'inline-flex',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Typography
                    className={classes.headText}
                    style={{ alignSelf: 'center' }}
                  >
                    {element.label}
                  </Typography>
                </Grid>
                <Grid item xs={9}>
                  <TextField
                    variant='outlined'
                    disabled={element.disabled}
                    fullWidth
                    name={element.valueName}
                    value={element.value}
                    onChange={handleChange}
                    placeholder={element.placeholder}
                  />
                </Grid>
              </React.Fragment>
            ) : (
              <React.Fragment key={element.label}>
                <Grid
                  item
                  xs={3}
                  style={{
                    display: 'inline-flex',
                    textAlign: 'center',
                    verticalAlign: 'middle',
                    justifyContent: 'flex-start',
                  }}
                >
                  <Typography
                    className={classes.headText}
                    style={{ alignSelf: 'center' }}
                  >
                    {inputs[1].label}
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <Select
                    value={inputs[1].value}
                    name={inputs[1].valueName}
                    onChange={handleChange}
                    variant='outlined'
                    fullWidth
                    MenuProps={{
                      getContentAnchorEl: null,
                      anchorOrigin: {
                        vertical: 'bottom',
                        horizontal: 'left',
                      },
                    }}
                  >
                    {inputs[1].options.map((innerElement, i) => (
                      <MenuItem
                        value={inputs[1].optionValues[i]}
                        key={innerElement}
                      >
                        {innerElement}
                      </MenuItem>
                    ))}
                  </Select>
                </Grid>
                <Grid item xs={5} />
              </React.Fragment>
            )
          )}

          <Grid item xs={12}>
            <Grid container direction='row' spacing={3}>
              <Grid
                item
                xs={3}
                style={{
                  display: 'inline-flex',
                  textAlign: 'left',
                  verticalAlign: 'middle',
                  justifyContent: 'flex-start',
                }}
              >
                <Typography
                  className={classes.headText}
                  style={{ alignSelf: 'center' }}
                >
                  Event Time
                </Typography>
              </Grid>
              <Grid item xs={9}>
                <EventTime
                  startTime={startTime}
                  endTime={endTime}
                  setStartTime={setStartTime}
                  setEndTime={setEndTime}
                />
                {notPossible && (
                  <Typography>
                    Not saved. Event end time must be after start time.
                  </Typography>
                )}
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container direction='row' justify='flex-end'>
              <Grid item>
                <Button
                  variant='contained'
                  color='secondary'
                  onClick={onSubmit}
                >
                  Create
                </Button>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
});

function mapDispatchToProps(dispatch) {
  return {
    postEvents: (body) => dispatch(postEvents(body)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventDetails);
