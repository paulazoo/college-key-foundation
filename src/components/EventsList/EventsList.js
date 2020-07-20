import { Card, Typography, Grid } from '@material-ui/core';
import React from 'react';
import moment from 'moment';

// Redux

// Theme
import { theme } from '../../theme.js';
import { makeStyles } from '@material-ui/core/styles';

// Custom Components
import EventCard from './EventCard';

const useStyles = makeStyles((theme) => ({
  cardListContainer: {
    padding: theme.spacing(4),
    paddingTop: 0,
    overflowX: 'auto',
    overflowY: 'auto',
  },
  emptyCardListContainer: {
    padding: theme.spacing(4),
    paddingTop: 0,
    width: '100%',
  },
  title: {
    margin: 0,
    marginTop: theme.spacing(4),
    color: theme.palette.common.white,
    fontWeight: 'light',
    fontSize: 30,
    letterSpacing: 0.3,
  },
  titleContainer: {
    textAlign: 'left',
    padding: '0px !important',
    paddingLeft: `${theme.spacing(4)} !important`,
  },
  cardListGridContainer: {
    textAlign: 'left',
    padding: '0px !important',
  },
  noEvents: {
    fontSize: 20,
    fontWeight: 'bold',
    letterSpacing: 0.3,
  },
  noEventsCard: {
    width: theme.spacing(37),
    height: '100%',
    padding: theme.spacing(2),
  },
}));

function EventsList({ points, title, more, ...props }) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12} className={classes.titleContainer}>
        <Typography className={classes.title}>{title}</Typography>
      </Grid>
      <Grid item xs={12} className={classes.cardListGridContainer}>
        {points.length > 0 ? (
          <div className={classes.cardListContainer}>
            <Grid container direction='row' spacing={5} wrap='nowrap'>
              {points
                .sort(
                  (a, b) =>
                    (b.start_time != null) - (a.start_time != null) ||
                    moment(b.start_time) - moment(a.start_time)
                )
                .map((point, i) => (
                  <Grid item key={i}>
                    <EventCard event={point} theme={point.theme} />
                  </Grid>
                ))}
            </Grid>
          </div>
        ) : (
          <div className={classes.emptyCardListContainer}>
            <Grid container direction='row'>
              <Card className={classes.noEventsCard}>
                <Typography className={classes.noEvents}>No Events</Typography>
              </Card>
            </Grid>
          </div>
        )}
      </Grid>
    </>
  );
}

export default EventsList;
