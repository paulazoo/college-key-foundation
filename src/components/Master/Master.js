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
import { getAccounts, getMentees, getMentors } from '../../store/actions/api';

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

  useEffect(() => {
    props.getAccounts();
    props.getMentors();
    props.getMentees();
  }, []);

  const [allOptions, setAllOptions] = useState([]);
  const [options, setOptions] = useState([]);
  const [selected, setSelected] = useState({});
  const [mentorResults, setMentorResults] = useState([]);
  const [menteeResults, setMenteeResults] = useState([]);

  // get attendee and room options for search
  useEffect(() => {
    setOptions(props.accounts);
    setAllOptions(props.accounts);

    setMentorResults(props.accounts.filter((p) => p.user_type === 'Mentor'));
    setMenteeResults(props.accounts.filter((p) => p.user_type === 'Mentee'));
  }, [props.accounts]);

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
                  mentees={props.accounts.filter(
                    (p) => p.user_type === 'Mentee'
                  )}
                  mentors={props.accounts.filter(
                    (p) => p.user_type === 'Mentor'
                  )}
                />
                <AccountSearch
                  options={options}
                  allOptions={allOptions}
                  selected={selected}
                  setSelected={setSelected}
                  setMentorResults={setMentorResults}
                  setMenteeResults={setMenteeResults}
                />
                <Grid item xs={6} className={classes.textContainer}>
                  <Typography className={classes.text}>Mentors</Typography>
                </Grid>
                <Grid item xs={6} className={classes.textContainer}>
                  <Typography className={classes.text}>Mentees</Typography>
                </Grid>
                <Grid item xs={6}>
                  <ShowAccounts people={mentorResults} />
                </Grid>
                <Grid item xs={6}>
                  <ShowAccounts people={menteeResults} />
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
  accounts: state.master.accounts,
  mentors: state.master.mentors,
  mentees: state.master.mentees,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    getAccounts: () => dispatch(getAccounts()),
    getMentors: () => dispatch(getMentors()),
    getMentees: () => dispatch(getMentees()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Master);
