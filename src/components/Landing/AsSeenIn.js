import React, { useState } from 'react';
import { Box, Typography, Grid } from '@material-ui/core';

// Theme
import { theme } from '../../theme';
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';

// Custom Components

const useStyles = makeStyles((theme) => ({
  headTextContainer: {
    textAlign: 'center',
  },
  headText: {
    fontWeight: 'bold',
    fontSize: 32,
  },
}));

function AsSeenIn(props) {
  const classes = useStyles();

  return (
    <Box bgcolor={theme.palette.primary.light}>
      <Grid container direction='row'>
        <Grid item xs={12} className={classes.headTextContainer}>
          <Typography className={classes.headText}>AS SEEN IN</Typography>
        </Grid>
      </Grid>
    </Box>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AsSeenIn);
