import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
  Divider,
  ListItem,
  ListItemText,
  List,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import {
  getAccounts,
  getMentees,
  getMentors,
  getNewsletterEmails,
} from '../../store/actions/api';

// Custom Components
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import AddAccounts from './AddAccounts';
import ShowAccounts from './ShowAccounts';
import MatchMentorMentee from './MatchMentorMentee';
import AccountSearch from './AccountSearch';
import CreateEvent from '../CreateEvent/CreateEvent';
import Import from './Import';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.teamGreen,
  },
  main: {
    padding: theme.spacing(4),
    paddingTop: 0,
    paddingBottom: 0,
  },
  card: {
    margin: theme.spacing(2),
    marginTop: 0,
    padding: theme.spacing(2),
  },
  textContainer: {
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 48,
  },
  cardUnauthorized: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    height: '100vh',
  },
}));

function Master(props) {
  const classes = useStyles();

  useEffect(() => {
    props.getAccounts();
    props.getMentors();
    props.getMentees();
    props.getNewsletterEmails();
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

    setMentorResults(Object.values(props.mentors).map((m) => m.account));
    setMenteeResults(Object.values(props.mentees).map((m) => m.account));
  }, [props.accounts]);

  return (
    <div className={classes.root}>
      <Navbar />
      {props.account.email === 'paulazhu@college.harvard.edu' ||
      props.account.email === 'collegekeyfoundation@gmail.com' ? (
        <Grid
          className={classes.main}
          container
          direction='row'
          alignItems='center'
          justify='center'
          spacing={3}
        >
          <Grid item xs={12} className={classes.textContainer}>
            <Typography className={classes.title}>Master Controls</Typography>
            {props.onMobile === true && (
              <Typography>
                WARNING: I havent designed master layout for mobile yet so this
                looks bad
              </Typography>
            )}
          </Grid>

          <Grid item xs={12}>
            <Card className={classes.card}>
              <Import />
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card className={classes.card}>
              <AddAccounts />
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card className={classes.card}>
              <MatchMentorMentee
                mentees={props.accounts.filter((p) => p.user_type === 'Mentee')}
                mentors={props.accounts.filter((p) => p.user_type === 'Mentor')}
              />
            </Card>
          </Grid>

          <Grid item xs={12}>
            <Card className={classes.card}>
              <Grid
                container
                direction='row'
                alignItems='center'
                justify='center'
                spacing={3}
              >
                <Grid item xs={12}>
                  <AccountSearch
                    options={options}
                    allOptions={allOptions}
                    selected={selected}
                    setSelected={setSelected}
                    setMentorResults={setMentorResults}
                    setMenteeResults={setMenteeResults}
                  />
                </Grid>
                <Grid item xs={6} className={classes.textContainer}>
                  <Typography className={classes.text}>Mentors</Typography>
                  <Divider />
                </Grid>
                <Grid item xs={6} className={classes.textContainer}>
                  <Typography className={classes.text}>Mentees</Typography>
                  <Divider />
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
          <Grid item xs={12}>
            <Card className={classes.card}>
              <Typography className={classes.text}>
                Newsletter Emails
              </Typography>
              <List>
                {props.newsletterEmails &&
                  props.newsletterEmails.map((newsletterEmail) => (
                    <ListItem>
                      <ListItemText>{`${newsletterEmail.email}, `}</ListItemText>
                    </ListItem>
                  ))}
              </List>
            </Card>
          </Grid>
          <Grid item xs={12}>
            <Card className={classes.card}>
              <CreateEvent />
            </Card>
          </Grid>
        </Grid>
      ) : (
        <Grid container direction='row' alignItems='center' justify='center'>
          <Grid item xs={6}>
            <Card className={classes.cardUnauthorized}>
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
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  account: state.account,
  accounts: state.master.accounts,
  mentors: state.master.mentors,
  mentees: state.master.mentees,
  newsletterEmails: state.master.newsletterEmails,
  onMobile: state.home.onMobile,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    getAccounts: () => dispatch(getAccounts()),
    getMentors: () => dispatch(getMentors()),
    getMentees: () => dispatch(getMentees()),
    getNewsletterEmails: () => dispatch(getNewsletterEmails()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Master);
