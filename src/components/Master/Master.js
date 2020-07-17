import React, { useState, useEffect } from 'react';
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
import { getAccounts } from '../../store/actions/api';

// Custom Components
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AddAccounts from './AddAccounts';
import ShowAccounts from './ShowAccounts';
import MatchMentorMentee from './MatchMentorMentee';
import AccountSearch from './AccountSearch';

const useStyles = makeStyles((theme) => ({
  card: {
    margin: theme.spacing(8),
    padding: theme.spacing(8),
    height: '100vh',
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

  const [people, setPeople] = useState([]);

  const getAccountsCallback = (accounts) => {
    setPeople(accounts);
  };

  useEffect(() => {
    props.getAccounts(getAccountsCallback);
  }, []);

  const [allOptions, setAllOptions] = useState([]);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState({});
  const [mentors, setMentors] = useState([]);
  const [mentees, setMentees] = useState([]);

  // get attendee and room options for search
  useEffect(() => {
    setOptions(people);
    setAllOptions(people);
  }, [people]);

  return (
    <>
      <Navbar />
      {props.account.email === 'paulazhu@college.harvard.edu' ||
      props.account.email === 'collegekeyfoundation@gmail.com' ? (
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
                    Master Controls
                  </Typography>
                </Grid>
                <AddAccounts />
                <MatchMentorMentee
                  mentees={people.filter((p) => p.user_type === 'Mentee')}
                  mentors={people.filter((p) => p.user_type === 'Mentor')}
                />
                <AccountSearch
                  options={options}
                  allOptions={allOptions}
                  selected={selected}
                  setSelected={setSelected}
                  setResults={setMentors}
                />
                <Grid item xs={6} className={classes.textContainer}>
                  <Typography className={classes.text}>Menters</Typography>
                </Grid>
                <Grid item xs={6} className={classes.textContainer}>
                  <Typography className={classes.text}>Mentees</Typography>
                </Grid>
                <Grid item xs={6}>
                  <ShowAccounts
                    people={people.filter((p) => p.user_type === 'Mentor')}
                  />
                </Grid>
                <Grid item xs={6}>
                  <ShowAccounts
                    people={people.filter((p) => p.user_type === 'Mentee')}
                  />
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
    getAccounts: (user, body, callback) =>
      dispatch(getAccounts(user, body, callback)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Master);
