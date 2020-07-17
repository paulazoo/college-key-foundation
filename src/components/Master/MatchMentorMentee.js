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
import { postMatch } from '../../store/actions/api';

// Custom Components
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
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

function MatchMentorMentee({ mentees, mentors, ...props }) {
  const classes = useStyles();

  const [mentee, setMentee] = useState('');
  const [mentor, setMentor] = useState('');

  const handleMenteeChange = (e) => {
    setMentee(e.target.value);
  };

  const handleMentorChange = (e) => {
    setMentor(e.target.value);
  };

  const handleMatch = () => {
    props.postMatch({ mentor_id: mentor, mentee_id: mentee });
    setMentee('');
    setMentor('');
  };

  const renderMatchMenuItem = (person) => {
    return (
      <MenuItem value={person.user_id}>
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
      <Grid item xs={12}>
        <Typography>
          WARNING: Mentees only have one mentor at a time.
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
        <Button color='secondary' variant='contained' onClick={handleMatch}>
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
    postMatch: (body) => dispatch(postMatch(body)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(MatchMentorMentee);
