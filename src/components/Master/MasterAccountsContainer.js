import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
  Divider,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { getAccounts, getMentors, getMentees } from '../../store/actions/api';

// Custom Components
import ImportMenteeMentor from '../GoogleSheets/ImportMenteeMentor';
import MatchMentorMentee from './MatchMentorMentee';
import AddAccounts from './AddAccounts';
import AccountSearch from './AccountSearch';
import ShowAccounts from './ShowAccounts';

const useStyles = makeStyles((theme) => ({
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
}));

function MasterAccountsContainer(props) {
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

    setMentorResults(Object.values(props.mentors).map((m) => m.account));
    setMenteeResults(Object.values(props.mentees).map((m) => m.account));
  }, [props.accounts]);

  return (
    <>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <ImportMenteeMentor />
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
    getAccounts: () => dispatch(getAccounts()),
    getMentors: () => dispatch(getMentors()),
    getMentees: () => dispatch(getMentees()),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterAccountsContainer);
