import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Landing/Footer';

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

function Master(props) {
  const classes = useStyles();

  const [mentorEmailValue, setMentorEmailValue] = useState('');
  const [menteeEmailValue, setMenteeEmailValue] = useState('');

  const handleMentorEmailValueChange = (e) => {
    setMentorEmailValue(e.target.value);
  };

  const handleMenteeEmailValueChange = (e) => {
    setMenteeEmailValue(e.target.value);
  };

  const handleNewMentor = () => {
    props.postNewsletterEmails({ email: mentorEmailValue });
    setMentorEmailValue('');
  };

  const handleNewMentee = () => {
    props.postNewsletterEmails({ email: menteeEmailValue });
    setMenteeEmailValue('');
  };

  return (
    <>
      <Navbar />
      {props.account.email === 'paulazhu@college.harvard.edu' ? (
        <Grid container direction='row' alignItems='center' justify='center'>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <Grid
                container
                direction='row'
                alignItems='center'
                justify='center'
                spacing={3}
              >
                <Grid item xs={12} className={classes.textContainer}>
                  <Typography className={classes.text}>
                    whatsup paula ;)
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.text}>
                    Add a Mentor Account with their email
                  </Typography>
                </Grid>
                <Grid item xs={6}>
                  <Typography className={classes.text}>
                    Add a Mentee Account with their email
                  </Typography>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    variant='outlined'
                    label="Mentor's Email"
                    placeholder='mentorexample@gmail.com'
                    value={mentorEmailValue}
                    onChange={handleMentorEmailValueChange}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    color='secondary'
                    variant='contained'
                    onClick={handleNewMentor}
                  >
                    Add Mentor
                  </Button>
                </Grid>
                <Grid item xs={4}>
                  <TextField
                    fullWidth
                    variant='outlined'
                    label="Mentee's Email"
                    placeholder='menteeexample@gmail.com'
                    value={menteeEmailValue}
                    onChange={handleMenteeEmailValueChange}
                  />
                </Grid>
                <Grid item xs={2}>
                  <Button
                    color='secondary'
                    variant='contained'
                    onClick={handleNewMentee}
                  >
                    Add Mentee
                  </Button>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Grid container direction='row' alignItems='center' justify='center'>
          <Grid item xs={6}>
            <Card className={classes.card}>
              <Grid
                container
                direction='row'
                alignItems='center'
                justify='center'
                spacing={3}
              >
                <Grid item xs={12} className={classes.textContainer}>
                  <Typography className={classes.text}>
                    YOU ARE UNAUTHORIZED
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      )}
      <Footer />
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

export default connect(mapStateToProps, mapDispatchToProps)(Master);
