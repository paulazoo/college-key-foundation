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

// Custom Components
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

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

function CreateEvent(props) {
  const classes = useStyles();

  const [mentorEmailValue, setMentorEmailValue] = useState('');

  const handleMentorEmailValueChange = (e) => {
    setMentorEmailValue(e.target.value);
  };

  const handleNewMentor = () => {
    props.postNewsletterEmails({ email: mentorEmailValue });
    setMentorEmailValue('');
  };

  return (
    <>
      <Grid item xs={12}>
        <Typography className={classes.text}>Create An Event</Typography>
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant='outlined'
          label='Event Name'
          value={mentorEmailValue}
          onChange={handleMentorEmailValueChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant='outlined'
          label='Kind'
          value={mentorEmailValue}
          onChange={handleMentorEmailValueChange}
        />
      </Grid>
      <Grid item xs={12}>
        <TextField
          fullWidth
          variant='outlined'
          label='Description'
          value={mentorEmailValue}
          onChange={handleMentorEmailValueChange}
        />
      </Grid>
      <Grid item xs={2}>
        <Button color='secondary' variant='contained' onClick={handleNewMentor}>
          Create
        </Button>
      </Grid>
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

export default connect(mapStateToProps, mapDispatchToProps)(CreateEvent);
