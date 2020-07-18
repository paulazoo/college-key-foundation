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
      <Grid
        container
        direction='row'
        alignItems='center'
        justify='center'
        spacing={3}
      >
        <Grid item xs={12} className={classes.headTextContainer}>
          <Typography className={classes.headText}>AS SEEN IN</Typography>
        </Grid>
        <Grid item>
          <img
            alt='Honolulu Civil Beat'
            height={128}
            width={128}
            src={require('../../assets/AsSeenIn/HonoluluCivilBeat.PNG')}
          />
        </Grid>
        <Grid item xs={12} />
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
