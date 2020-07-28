import React, { useState, useEffect } from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button,
  Dialog,
  Box,
  CardActions,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { NavLink, useParams } from 'react-router-dom';
import moment from 'moment';

// Redux
import { connect } from 'react-redux';
import { getPublicEvents, getEvents } from '../../store/actions/api';

// Theme
import { makeStyles } from '@material-ui/styles';

// Custom Components
import EventButton from '../EventsList/EventButton';
import PublicEventButton from '../EventsList/PublicEventButton';
import PublicRegisterPopup from '../EventsList/PublicRegisterPopup';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

const useStyles = makeStyles((theme) => ({
  eventDialog: {
    padding: theme.spacing(4),
  },
  eventCard: {
    width: '100%',
    position: 'relative',
    height: '100%',
    overflow: 'auto',
  },
  eventActionArea: {
    position: 'relative',
    height: '100%',
  },
  nameText: {},
  cardTitle: {
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 26,
  },
  cardTime: {
    fontSize: 22,
    fontWeight: 'light',
    color: theme.palette.common.gray,
    margin: 0,
  },
  cardHost: {
    fontSize: 18,
    fontWeight: 'bold',
  },
  cardKind: {
    fontSize: 18,
  },
  cardDesc: {
    fontSize: 16,
  },
  descContainer: {
    wordBreak: 'break-word',
  },
  link: {
    margin: 0,
    textTransform: 'none',
  },
  linkContainer: { wordBreak: 'break-word' },
  linkText: {
    color: theme.palette.common.black,
    textDecoration: 'none',
  },
}));

function EventPage({ handlePublicRegisterPopup, ...props }) {
  const [name, setName] = useState('public');

  const { eventId } = useParams();

  const [event, setEvent] = useState();

  useEffect(() => {
    if (localStorage.getItem('user_token') && props.account.id) {
      props.getEvents();
    } else {
      props.getPublicEvents();
    }
  }, []);

  useEffect(() => {
    if (localStorage.getItem('user_token') && props.account.id) {
      setEvent(props.events[eventId]);
      console.log(props.events);
      setName('upcoming');
    } else {
      setEvent(props.publicEvents[eventId]);
      setName('upcoming');
    }
  }, [props.events, props.publicEvents]);
  const classes = useStyles();

  const renderEventKind = (kind) => {
    if (kind === 'open') {
      return <Typography className={classes.cardKind}>Public Event</Typography>;
    }
    if (kind === 'invite-only') {
      return (
        <Typography className={classes.cardKind}>Private Event</Typography>
      );
    }
  };

  const renderEventButton = (name) => {
    if (name === 'public') {
      return (
        <PublicEventButton
          fullLink
          eventId={event.id}
          publicLink={event.public_link}
          showJoin={moment().add(1, 'days').isAfter(moment(event.start_time))}
          showRegister={moment().isBefore(moment(event.end_time))}
          handleCloseEventPopup={() => {}}
          handlePublicRegisterPopup={handlePublicRegisterPopup}
        />
      );
    }
    return (
      <EventButton
        fullLink
        eventId={event.id}
        link={event.link}
        showJoin={moment().add(1, 'days').isAfter(moment(event.start_time))}
        showRegister={moment().isBefore(moment(event.end_time))}
        accountRegistration={event.account_registration}
      />
    );
  };

  return (
    <>
      <Navbar />
      <Typography>
        {localStorage.getItem('user_token') &&
          props.account.id &&
          "If you're a mentor or mentee, please log in to register!"}
      </Typography>
      <br />
      {event ? (
        <Card className={classes.eventCard}>
          <CardHeader
            title={(
              <div className={classes.cardTitle}>
                <strong className={classes.nameText}>{`${event.name} `}</strong>
              </div>
            )}
            subheader={(
              <div className={classes.cardTime}>
                {event.start_time !== null ? (
                  <>
                    {`${moment(event.start_time).format(
                      'ddd, MMMM Do, h:mm A'
                    )} to ${moment(event.end_time).format('h:mm A')}`}
                  </>
                ) : (
                  <>Always open.</>
                )}
              </div>
            )}
          />
          <CardContent>
            <Grid
              container
              direction='row'
              justify='flex-start'
              alignItems='center'
              spacing={2}
            >
              <Grid item xs={12}>
                <Typography className={classes.cardHost}>
                  {event.host && `Hosted by: ${event.host}`}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {renderEventKind(event.kind)}
              </Grid>
              <Grid item xs={12} className={classes.descContainer}>
                <Typography className={classes.cardDesc}>
                  {event.description && event.description}
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography className={classes.cardDesc}>
                  Link to join will show up 24 hours before event begins.
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {renderEventButton(name)}
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      ) : (
        <Typography>Sorry! This event does not exist yet ):</Typography>
      )}
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  account: state.account,
  events: state.events.events,
  publicEvents: state.events.publicEvents,
});

function mapDispatchToProps(dispatch) {
  return {
    getEvents: () => dispatch(getEvents()),
    getPublicEvents: () => dispatch(getPublicEvents()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventPage);
