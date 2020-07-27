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
  IconButton,
} from '@material-ui/core';
import InfoIcon from '@material-ui/icons/Info';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

// Redux

// Theme
import { makeStyles } from '@material-ui/styles';

// Custom Components
import EventButton from './EventButton';
import EventPopup from './EventPopup';
import PublicEventButton from './PublicEventButton';
import PublicRegisterPopup from './PublicRegisterPopup';

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
  nameText: {},
  cardTitle: {
    alignItems: 'center',
    alignContent: 'center',
    paddingTop: '0 !important',
    paddingRight: '0 !important',
    paddingLeft: '0 !important',
    paddingBottom: `${theme.spacing(1)} !important`,
  },
  linkText: {
    color: theme.palette.common.black,
    textDecoration: 'none',
  },
  infoButton: {
    padding: 0,
    height: 29,
    width: 29,
  },
  infoIcon: {
    height: 29,
    width: 29,
  },
}));

function EventCard({ event, name, ...props }) {
  const classes = useStyles();

  const [popupOpen, setPopupOpen] = useState(false);
  const [publicRegisterPopupOpen, setPublicRegisterPopupOpen] = useState(false);

  const handleEventCardClick = () => {
    setPopupOpen(true);
  };

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

  const handlePublicRegisterPopup = () => {
    setPopupOpen(false);
    setPublicRegisterPopupOpen(true);
  };

  const renderEventButton = (name) => {
    if (name === 'public') {
      return (
        <PublicEventButton
          eventId={event.id}
          publicLink={event.publicLink}
          showJoin={moment().add(1, 'days').isAfter(moment(event.start_time))}
          showRegister={moment().isBefore(moment(event.end_time))}
          handlePublicRegisterPopup={handlePublicRegisterPopup}
        />
      );
    }
    return (
      <EventButton
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
      <EventPopup
        popupOpen={popupOpen}
        setPopupOpen={setPopupOpen}
        event={event}
        name={name}
        handlePublicRegisterPopup={handlePublicRegisterPopup}
      />
      <PublicRegisterPopup
        publicRegisterPopupOpen={publicRegisterPopupOpen}
        setPublicRegisterPopup={setPublicRegisterPopupOpen}
        event={event}
      />
      <Card className={classes.eventCard}>
        <CardHeader
          title={(
            <Grid
              container
              direction='row'
              alignItems='center'
              justify='flex-start'
              spacing={5}
            >
              <Grid item className={classes.cardTitle}>
                <IconButton onClick={handleEventCardClick}>
                  <InfoIcon className={classes.infoButton} />
                </IconButton>
                <strong className={classes.nameText}>{`${event.name} `}</strong>
              </Grid>
            </Grid>
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
                <Grid item>{renderEventButton(name)}</Grid>
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
    </>
  );
}

export default EventCard;
