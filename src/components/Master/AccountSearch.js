import React, { useState, useEffect } from 'react';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { InputAdornment, Grid, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// Redux
import { connect } from 'react-redux';

// Theme
import { theme } from '../../theme.js';
import { makeStyles } from '@material-ui/core/styles';

// Custom Components

const useStyles = makeStyles((theme) => ({
  autocomplete: { width: 300 },
}));

function AccountSearch({
  options,
  allOptions = [],
  selected,
  setSelected,
  setMentorResults,
  setMenteeResults,
  ...props
}) {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event, newValue) => {
    setSelected(newValue);
    const preMentors = [];
    const preMentees = [];
    let user = {};
    if (newValue !== null && newValue.user_type === 'Mentor') {
      preMentors.push(newValue);
      setMentorResults(preMentors);

      user = props.mentors[newValue.user_id];
      if (user.mentees) {
        user.mentees.forEach((m) => {
          preMentees.push(m.account);
        });
      }

      setMenteeResults(preMentees);
    } else if (newValue !== null && newValue.user_type === 'Mentee') {
      preMentees.push(newValue);
      setMenteeResults(preMentees);

      user = props.mentees[newValue.user_id];
      if (user.mentor) {
        preMentors.push(user.mentor.account);
      }

      setMentorResults(preMentors);
    } else if (newValue === null) {
      setMentorResults(allOptions.filter((p) => p.user_type === 'Mentor'));
      setMenteeResults(allOptions.filter((p) => p.user_type === 'Mentee'));
    }
  };

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const filterOptions = createFilterOptions({
    // matchFrom: 'start',
    stringify: (option) => option.email,
    limit: 5,
  });

  return (
    <>
      <Grid container spacing={1} alignItems='center' justify='center'>
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item>
          <Autocomplete
            value={selected}
            onChange={handleChange}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            options={options}
            filterOptions={filterOptions}
            // freeSolo
            getOptionLabel={(option) => option.email}
            className={classes.autocomplete}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Search by email'
                variant='outlined'
              />
            )}
          />
        </Grid>
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({
  accounts: state.master.accounts,
  mentors: state.master.mentors,
  mentees: state.master.mentees,
});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(AccountSearch);
