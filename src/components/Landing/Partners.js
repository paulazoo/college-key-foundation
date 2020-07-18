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

function Partners(props) {
  const classes = useStyles();

  return (
    <Box bgcolor={theme.palette.secondary.light}>
      <Grid
        container
        direction='row'
        alignItems='center'
        justify='center'
        spacing={3}
      >
        <Grid item xs={12} className={classes.headTextContainer}>
          <Typography className={classes.headText}>PARTNERS</Typography>
        </Grid>
        <Grid item>
          <img
            alt='College Essay Guy'
            height={128}
            width={128}
            src={require('../../assets/Partners/CollegeEssayGuy.PNG')}
          />
        </Grid>
        <Grid item>
          <img
            alt='Dear Asian Youth'
            height={128}
            width={128}
            src={require('../../assets/Partners/DearAsianYouth.PNG')}
          />
        </Grid>
        <Grid item>
          <img
            alt='Destined Doctor'
            height={128}
            width={128}
            src={require('../../assets/Partners/DestinedDoctor.PNG')}
          />
        </Grid>
        <Grid item>
          <img
            alt='Socrates Post'
            height={128}
            width={128}
            src={require('../../assets/Partners/SocratesPost.PNG')}
          />
        </Grid>
        <Grid item>
          <img
            alt='We Rise Above'
            height={128}
            width={128}
            src={require('../../assets/Partners/WeRiseAbove.PNG')}
          />
        </Grid>
        <Grid item>
          <img
            alt='Wonsulting'
            height={128}
            width={128}
            src={require('../../assets/Partners/Wonsulting.PNG')}
          />
        </Grid>
        <Grid item>
          <img
            alt='YMCA Honolulu'
            height={128}
            width={128}
            src={require('../../assets/Partners/YMCAHonolulu.PNG')}
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

export default connect(mapStateToProps, mapDispatchToProps)(Partners);
