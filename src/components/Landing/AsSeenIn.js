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
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.civilbeat.org/2020/06/we-must-reimagine-college-guidance-programs/?fbclid=IwAR2Tad_5RBylBf9U99mrej4n4G5f2-EfiZzlHLlFu_R3DIWk4XVrKD7PvJE'
          >
            <img
              alt='Honolulu Civil Beat'
              height={128}
              width={128}
              src={require('../../assets/AsSeenIn/HonoluluCivilBeat.PNG')}
            />
          </a>
        </Grid>
        <Grid item>
          <a
            rel='noreferrer'
            target='_blank'
            href='http://casarevista.com/5192/news/we-must-refocus-on-college-guidance-programs/?fbclid=IwAR2lOx_uw8UuV-OtNS58TbNh4jcsY4I-oTithRW0i1o41rRejIPukDyX7W0'
          >
            <img
              alt='TheCasaRevista'
              height={128}
              width={128}
              src={require('../../assets/AsSeenIn/TheCasaRevista.PNG')}
            />
          </a>
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
