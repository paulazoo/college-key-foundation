import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
  MenuItem,
  Select,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';

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

function MatchMentorMentee(props) {
  const classes = useStyles();

  const [mentee, setMentee] = useState('');
  const [mentor, setMentor] = useState('');

  const mentees = [
    {
      name: 'Example Name',
      email: 'exampleemail@gmail.com',
      id: 7,
      image_url:
        'https://lh3.googleusercontent.com/a-/AOh14GhIgVDyqkmlWla6t2jFW-LnRVRSELVB_1lUgW2Y=s96-c',
    },
  ];

  const mentors = [];

  const handleMenteeChange = (e) => {
    setMentee(e.target.value);
  };

  const handleMentorChange = (e) => {
    setMentee(e.target.value);
  };

  const handleNewMentor = () => {
    props.postNewsletterEmails({ email: mentor });
    setMentee('');
    setMentor('');
  };

  const renderMatchMenuItem = (person) => {
    return (
      <MenuItem value={person.id}>
        <Grid container direction='row' alignItems='center' spacing={1}>
          <Grid item>
            {person.image_url && (
              <img
                style={{
                  height: '24px',
                  width: '24px',
                  display: 'block',
                  borderRadius: '50%',
                }}
                src={person.image_url}
                alt='Profile picture'
              />
            )}
          </Grid>
          <Grid item>{person.email}</Grid>
          <Grid item xs={12}>
            {person.name && `(${person.name})`}
          </Grid>
        </Grid>
      </MenuItem>
    );
  };

  return (
    <>
      <Grid item xs={12}>
        <Typography className={classes.text}>
          Match a Mentee with Mentor
        </Typography>
      </Grid>
      <Grid item xs={5}>
        <Select
          fullWidth
          label='Select Mentee'
          value={mentee}
          onChange={handleMenteeChange}
        >
          {mentees.map((person) => renderMatchMenuItem(person))}
        </Select>
      </Grid>
      <Grid item xs={5}>
        <Select
          fullWidth
          label='Select Mentor'
          value={mentor}
          onChange={handleMentorChange}
        >
          {mentors.map((person) => renderMatchMenuItem(person))}
        </Select>
      </Grid>
      <Grid item xs={2}>
        <Button color='secondary' variant='contained' onClick={handleNewMentor}>
          Match
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

export default connect(mapStateToProps, mapDispatchToProps)(MatchMentorMentee);
