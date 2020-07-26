import React, { useState, useEffect } from 'react';
import Autocomplete, {
  createFilterOptions,
} from '@material-ui/lab/Autocomplete';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
  MenuItem,
} from '@material-ui/core';
import SearchIcon from '@material-ui/icons/Search';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout } from '../../store/actions/index';

// Custom Components

const useStyles = makeStyles((theme) => ({
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
}));

function EventSearch({ selected, setSelected, setEventResult, ...props }) {
  const classes = useStyles();

  const [inputValue, setInputValue] = useState('');

  const [options, setOptions] = useState([
    { name: 'No Events', kind: 'N/A', start_time: 'N/A' },
  ]);

  // useEffect(() => {
  //   setOptions(props.allEvents);
  // }, [props.allEvents]);

  const handleChange = (event, newValue) => {
    setSelected(newValue);
    if (newValue !== null) {
      setEventResult(newValue);
    } else if (newValue === null) {
      setEventResult(null);
    }
  };

  const handleInputChange = (event, newInputValue) => {
    setInputValue(newInputValue);
  };

  const filterOptions = createFilterOptions({
    // matchFrom: 'start',
    stringify: (option) => option.name,
    limit: 5,
  });

  const renderEventItem = (eventItem) => {
    return (
      <MenuItem value={eventItem.id} key={eventItem.id}>
        <Grid container direction='row' alignItems='center' spacing={1}>
          <Grid item>{eventItem.name}</Grid>
          <Grid item>{eventItem.kind}</Grid>
          <Grid item xs={12}>
            {eventItem.start_time && `(Start time: ${eventItem.start_time})`}
          </Grid>
        </Grid>
      </MenuItem>
    );
  };

  return (
    <>
      <Grid container direction='row' justify='flex-start' alignItems='center'>
        <Grid item>
          <SearchIcon />
        </Grid>
        <Grid item xs={4}>
          <Autocomplete
            fullWidth
            value={selected}
            onChange={handleChange}
            inputValue={inputValue}
            onInputChange={handleInputChange}
            options={options}
            filterOptions={filterOptions}
            // freeSolo
            getOptionLabel={(option) => option.name}
            renderOption={(option, { selected }) => (
              <>{renderEventItem(option)}</>
            )}
            className={classes.autocomplete}
            renderInput={(params) => (
              <TextField
                {...params}
                placeholder='Search by event name'
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
  user: state.user,
  account: state.account,
  allEvents: state.events.allEvents,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(EventSearch);
