import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  Grid,
  Button,
  Dialog,
  CardActions,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

// Redux

// Theme
import { makeStyles } from '@material-ui/styles';

// Custom Components
import EventButton from './EventButton';

const useStyles = makeStyles((theme) => ({
  eventDialog: {
    padding: theme.spacing(4),
  },
  eventCard: {
    width: '100%',
    position: 'relative',
  },
  eventActionArea: {
    position: 'relative',
    height: '100%',
  },
  nameText: {},
  cardTitle: {
    alignItems: 'center',
    alignContent: 'center',
    fontSize: 32,
  },
  cardTime: {
    fontSize: 28,
    fontWeight: 'light',
    color: theme.palette.common.gray,
    margin: 0,
  },
  cardHost: {
    fontSize: 24,
    fontWeight: 'bold',
  },
  cardKind: {
    fontSize: 24,
  },
  cardDesc: {
    fontSize: 20,
  },
  descContainer: {
    wordBreak: 'break-word',
  },
  linkText: {
    color: theme.palette.common.black,
    textDecoration: 'none',
  },
}));

function EventPopup({ event, popupOpen, setPopupOpen, ...props }) {
  const classes = useStyles();

  const handleEventCardClick = () => {};

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

  const handleClose = () => {
    setPopupOpen(false);
  };

  return (
    <Dialog
      open={popupOpen}
      onClose={handleClose}
      className={classes.eventDialog}
    >
      <Card className={classes.eventCard}>
        <CardHeader
          title={
            <div className={classes.cardTitle}>
              <strong className={classes.nameText}>{`${event.name} `}</strong>
            </div>
          }
          subheader={
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
          }
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
            <Grid item xs={12} />
            <Grid item xs={12}>
              <Grid container direction='row' justify='center'>
                <Grid item>
                  <EventButton className={classes.actions} link={event.link} />
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </CardContent>
        <CardActions>
          <Button onClick={handleClose}>Close</Button>
        </CardActions>
      </Card>
    </Dialog>
  );
}

export default EventPopup;
