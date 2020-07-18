import React, { useState } from 'react';
import {
  Typography,
  Card,
  CardHeader,
  CardContent,
  CardActionArea,
  CardActions,
  CardMedia,
  Box,
} from '@material-ui/core';
import { NavLink } from 'react-router-dom';
import moment from 'moment';

// Redux

// Theme
import { makeStyles } from '@material-ui/styles';

// Custom Components
import EventButton from './EventButton';

// const noImageFound = require('../../assets/no-image-found.png');

const useStyles = makeStyles((theme) => ({
  eventCard: {
    width: 300 * theme.singleSpacing,
    height: 300 * theme.singleSpacing,
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
  actions: {
    position: 'absolute',
    bottom: 0,
    left: 0,
  },
  nameText: {},
  cardTitle: {
    alignItems: 'center',
    alignContent: 'center',
  },
  desc: {
    padding: theme.spacing(4),
    paddingTop: 0,
    width: 300,
  },
  descContainer: {
    wordBreak: 'break-word',
  },
  linkText: {
    color: theme.palette.common.black,
    textDecoration: 'none',
  },
}));

function EventCard({ event, ...props }) {
  const classes = useStyles();

  const renderEventType = (type) => {
    if (type === 'invite_only') {
      return <p>(Invite Required)</p>;
    }
  };

  return (
    <Card className={classes.eventCard}>
      <a
        rel='noreferrer'
        target='_blank'
        href='https://www.civilbeat.org/2020/06/we-must-reimagine-college-guidance-programs/?fbclid=IwAR2Tad_5RBylBf9U99mrej4n4G5f2-EfiZzlHLlFu_R3DIWk4XVrKD7PvJE'
        className={classes.linkText}
      >
        <CardActionArea className={classes.eventActionArea}>
          <CardHeader
            title={
              <div className={classes.cardTitle}>
                <strong className={classes.nameText}>{`${event.name} `}</strong>
              </div>
            }
            subheader={
              <div>
                <EventButton className={classes.actions} link={event.link} />
                {event.start_time !== null ? (
                  <>
                    <p>
                      {moment(event.start_time).format('ddd, MMMM Do, h:mm A')}
                    </p>
                    <br />
                  </>
                ) : (
                  <>
                    <p>Always open.</p>
                    <br />
                  </>
                )}
                {renderEventType(event.kind)}
              </div>
            }
          />
          <Box className={classes.descContainer}>
            <Typography className={classes.desc}>
              {event.description && event.description}
            </Typography>
          </Box>
          {/* {theme ? (
          <CardMedia
            className={classes.media}
            image={`${theme.card_image_url}`}
          />
        ) : (
          <CardMedia className={classes.media} image={noImageFound} />
        )} */}
        </CardActionArea>
      </a>
    </Card>
  );
}

export default EventCard;
