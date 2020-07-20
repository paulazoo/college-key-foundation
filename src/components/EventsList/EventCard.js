import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Grid,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

// Redux

// Theme
import { makeStyles } from '@material-ui/styles';

// Custom Components
import EventButton from './EventButton';

const noImageFound = require('../../assets/no-image-found.png');

const useStyles = makeStyles((theme) => ({
  eventCard: {
    width: theme.spacing(36),
    height: theme.spacing(42),
    position: 'relative',
  },
  eventActionArea: {
    position: 'relative',
    height: '100%',
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
    width: '100%',
    position: 'absolute',
    bottom: 0,
  },
  actions: {},
  roleText: {
    fontSize: 15,
  },
  nameText: {},
  cardTitle: {
    alignItems: 'center',
    alignContent: 'center',
  },
  linkText: {
    color: theme.palette.common.black,
    textDecoration: 'none',
  },
}));

function EventCard({ event, ...props }) {
  const classes = useStyles();

  const renderEventType = (type) => {
    if (type === 'open') {
      return <>{' (Public)'}</>;
    }
    if (type === 'fellows_only') {
      return <>{' (Fellows Only)'}</>;
    }
    if (type === 'invite_only') {
      return <>{' (Invite Required)'}</>;
    }
  };

  return (
    <Card className={classes.eventCard}>
      <CardHeader
        title={(
          <div className={classes.cardTitle}>
            <strong className={classes.nameText}>{`${event.name} `}</strong>
            <div className={classes.roleText}>
              {event.host ? `Hosted By: ${event.host}` : null}
            </div>
          </div>
        )}
        subheader={(
          <div>
            {event.start_time !== null ? (
              <>
                {`${moment(event.start_time).format('lll')} to ${moment(
                  event.end_time
                ).format('LT')}`}
              </>
            ) : (
              <>Always open.</>
            )}
            {renderEventType(event.kind)}
            <Grid container direction='row' justify='center' spacing={1}>
              <Grid item>
                <EventButton className={classes.actions} link={event.link} />
              </Grid>
            </Grid>
          </div>
        )}
      />
      {event.image_url ? (
        <CardMedia className={classes.media} image={`${event.image_url}`} />
      ) : (
        <CardMedia className={classes.media} image={noImageFound} />
      )}
    </Card>
  );
}

export default EventCard;
