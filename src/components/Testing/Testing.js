/* eslint-disable no-use-before-define */
import React from 'react';
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
  root: {
    width: 500,
    '& > * + *': {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Tags() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <Autocomplete
        multiple
        options={top100Films}
        getOptionLabel={(option) => option.email}
        renderInput={(params) => (
          <TextField
            {...params}
            variant='standard'
            label='Select people to invite'
          />
        )}
        // renderOption={(option, { selected }) => (
        //   <>{renderMatchMenuItem(option)}</>
        // )}
      />
    </div>
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { email: 'The Shawshank Redemption', year: 1994 },
  { email: 'The Godfather', year: 1972 },
  { email: 'The Godfather: Part II', year: 1974 },
  { email: 'The Dark Knight', year: 2008 },
];
