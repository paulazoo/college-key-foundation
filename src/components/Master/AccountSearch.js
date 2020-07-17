import React, { useState, useEffect } from 'react';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import { InputAdornment, Grid, TextField } from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// Redux

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
  setResults,
  ...props
}) {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');

  const handleChange = (event, newValue) => {
    setSelected(newValue);
    if (newValue !== null) {
      const preMentors = [];
      preMentors.push(newValue);
      setResults(preMentors);
    } else if (newValue === null) {
      setResults(allOptions);
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

export default AccountSearch;
