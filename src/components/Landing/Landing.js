import React, { useState } from 'react';
import { useHistory } from 'react-router-dom';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Divider,
  Card,
  Box,
} from '@material-ui/core';

// Theme
import { theme } from '../../theme';
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';

// Custom Components
import Navbar from '../Navbar/Navbar';
import HomepageLayout from './HomepageLayout';
import Footer from '../Footer/Footer';
import Three from './Three';
import WordDivider from '../Shared/WordDivider';
import AsSeenIn from './AsSeenIn';
import Partners from './Partners';
import Overview from './Overview';
import EmailNewsletter from '../EmailNewsletter/EmailNewsletter';

const backgroundImage =
  'https://static.wixstatic.com/media/6f9a2f9dd5574440a18d95f4679c14a7.jpg/v1/fit/w_924,h_520/6f9a2f9dd5574440a18d95f4679c14a7.jpg';

const useStyles = makeStyles((theme) => ({
  background: {
    backgroundImage: `url(${backgroundImage})`,
    backgroundColor: '#7fc7d9', // Average color of the background image.
    backgroundPosition: 'center',
  },
  explainPaper: {
    backgroundImage: '',
    // 'url("https://images.pexels.com/photos/116720/pexels-photo-116720.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940")',
    backgroundColor: theme.palette.primary.main,
    backgroundPosition: 'center',
    color: theme.palette.common.white,
    paddingTop: '4vw',
    paddingRight: '10vw',
    paddingLeft: '10vw',
    paddingBottom: '4vw',
  },
  button: {
    minWidth: 200,
    // marginTop: theme.spacing(8)
  },
  h5: {
    marginBottom: theme.spacing(4),
    marginTop: theme.spacing(3),
    [theme.breakpoints.up('sm')]: {
      marginTop: theme.spacing(5),
    },
  },
  more: {
    marginTop: theme.spacing(2),
  },
  boldHomeText: {
    fontWeight: 'bold',
  },
  textGrid: {
    textAlign: 'right',
    width: '100%',
    padding: 0,
    paddingRight: theme.spacing(2),
  },
  wordDivider: {
    fontWeight: 'bold',
    color: theme.palette.common.gray,
  },
  applyButton: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  dueDateContainer: {
    textAlign: 'center',
  },
  dueDate: {
    fontWeight: 'bold',
    fontSize: 18,
  },
  spacing: {
    height: theme.spacing(8),
  },
  memberCount: {
    fontWeight: 'bold',
    fontSize: 64,
  },
  mentorsFrom: {
    fontWeight: 'bold',
    fontSize: 18,
  },
}));

function Landing(props) {
  const classes = useStyles();

  const history = useHistory();

  const handleApply = () => {
    history.push('/apply');
  };

  return (
    <>
      <Navbar />
      <HomepageLayout backgroundClassName={classes.background}>
        {/* Increase the network loading priority of the background image. */}
        <img
          style={{ display: 'none' }}
          src={backgroundImage}
          alt='increase priority'
        />
        <Grid container direction='row' justify='flex-end'>
          <Grid item xs={4} />
          <Grid item xs={8} className={classes.textGrid}>
            <Typography
              color='inherit'
              variant='h2'
              className={classes.boldHomeText}
            >
              NOW IS THE TIME FOR HOPE
            </Typography>
            <br />
          </Grid>
          <Grid item xs={6} />
          <Grid item xs={6} className={classes.textGrid}>
            <Typography
              color='inherit'
              variant='h4'
              className={classes.boldHomeText}
            >
              From underrepresented students to underrepresented students
            </Typography>
            <br />
          </Grid>
          <Grid item xs={4} className={classes.textGrid}>
            <Typography color='inherit' variant='h5'>
              The College Key Foundation was founded on the idea of free,
              accessible guidance to the college application process for those
              of underprivileged backgrounds
            </Typography>
            <br />
            <Button
              color='secondary'
              variant='contained'
              className={classes.applyButton}
              onClick={handleApply}
            >
              APPLY NOW
            </Button>
          </Grid>
        </Grid>
      </HomepageLayout>
      <WordDivider spacing={225}>
        <Typography variant='h3' className={classes.wordDivider}>
          Our Fellowship Program
        </Typography>
      </WordDivider>
      <Three />
      <div className={classes.spacing} />
      <Card elevation={2}>
        <Box
          bgcolor={theme.palette.secondary.light}
          color={theme.palette.primary.main}
          textAlign='center'
        >
          <Typography className={classes.memberCount}>
            250+ Fellows and 250+ Mentors
          </Typography>
          <Grid container direction='row' alignItems='center' justify='center'>
            <Grid item xs={8}>
              <Typography className={classes.mentorsFrom}>
                With mentors from Harvard, Johns Hopkins, Columbia, UCLA, Yale,
                MIT, Dartmouth, USC, Duke, Emory, Brown, Georgetown, Princeton,
                Cornell, WashU, UPenn, Stanford, and more.
              </Typography>
              <br />
            </Grid>
          </Grid>
        </Box>
      </Card>
      <div className={classes.spacing} />
      <Overview />
      <div className={classes.spacing} />
      <Grid container direction='row' justify='center' alignItems='center'>
        <Grid item>
          <Button
            variant='contained'
            color='secondary'
            className={classes.applyButton}
            onClick={handleApply}
          >
            APPLY NOW
          </Button>
        </Grid>
        <Grid item xs={12} className={classes.dueDateContainer}>
          <br />
          <Typography className={classes.dueDate}>
            Fellowship applications will be open again in January 2021
          </Typography>
        </Grid>
      </Grid>
      <div className={classes.spacing} />
      <Grid item xs={12}>
        <AsSeenIn />
      </Grid>
      <Grid item xs={12}>
        <Partners />
      </Grid>
      <div className={classes.spacing} />
      <EmailNewsletter />
      <div className={classes.spacing} />
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Landing);
