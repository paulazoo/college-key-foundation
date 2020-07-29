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
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import { postUnmatch } from '../../store/actions/api';

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

function UnmatchMentorMentee({ menteesAccounts, mentorsAccounts, ...props }) {
  const classes = useStyles();

  const [menteeAccount, setMenteeAccount] = useState('');
  const [mentorAccount, setMentorAccount] = useState('');
  const [inputMenteeValue, setInputMenteeValue] = useState('');

  const handleMenteeChange = (event, newValue) => {
    console.log(newValue);
    setMenteeAccount(newValue);
    // Find respective matched mentor and set Mentor as well
    const mentee = props.mentees[newValue.user_id];
    const mentor = mentee.mentor;
    setMentorAccount(props.accounts[mentor.account.id]);
  };

  const handleUnmatch = () => {
    props.postUnmatch({
      mentor_id: mentorAccount.user.id,
      mentee_id: menteeAccount.user.id,
    });
    setMenteeAccount('');
    setMentorAccount('');
  };

  const handleInputMenteeChange = (event, newInputValue) => {
    setInputMenteeValue(newInputValue);
  };

  const filterOptions = createFilterOptions({
    // matchFrom: 'start',
    stringify: (option) => option.email,
    limit: 5,
  });

  const renderMatchMenuItem = (person) => {
    return (
      person && (
        <MenuItem value={person.user_id} key={person.id}>
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
      )
    );
  };

  return (
    <>
      <Grid
        container
        direction='row'
        alignItems='center'
        justify='center'
        spacing={3}
      >
        <Grid item xs={12}>
          <Typography className={classes.text}>
            Unmatch a Mentee with their Mentor
          </Typography>
        </Grid>
        <Grid item>
          <Typography>{'Unmatch Mentee '}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            fullWidth
            value={menteeAccount}
            onChange={handleMenteeChange}
            inputValue={inputMenteeValue}
            onInputChange={handleInputMenteeChange}
            options={menteesAccounts} // TODO: only unmatched mentees
            filterOptions={filterOptions}
            // freeSolo
            getOptionLabel={(person) => person.email}
            renderOption={(option, { selected }) => (
              <>{renderMatchMenuItem(option)}</>
            )}
            className={classes.autocomplete}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Select Mentee'
                variant='outlined'
              />
            )}
          />
        </Grid>
        <Grid item>
          <Typography>{' with Mentor '}</Typography>
        </Grid>
        <Grid item xs={4}>
          <Typography>
            {mentorAccount && `${mentorAccount.email} (${mentorAccount.name})`}
          </Typography>
        </Grid>
        <Grid item>
          <Button color='secondary' variant='contained' onClick={handleUnmatch}>
            Unmatch
          </Button>
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  account: state.account,
  accounts: state.master.accounts,
  mentees: state.master.mentees,
  mentors: state.master.mentors,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    postUnmatch: (body) => dispatch(postUnmatch(body)),
  };
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UnmatchMentorMentee);
