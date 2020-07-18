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
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.collegeessayguy.com/'
          >
            <img
              alt='College Essay Guy'
              height={128}
              width={128}
              src={require('../../assets/Partners/CollegeEssayGuy.PNG')}
            />
          </a>
        </Grid>
        <Grid item>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.dearasianyouth.org/home/'
          >
            <img
              alt='Dear Asian Youth'
              height={128}
              width={128}
              src={require('../../assets/Partners/DearAsianYouth.PNG')}
            />
          </a>
        </Grid>
        <Grid item>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://destineddoctors.wixsite.com/website'
          >
            <img
              alt='Destined Doctors'
              height={128}
              width={128}
              src={require('../../assets/Partners/DestinedDoctors.PNG')}
            />
          </a>
        </Grid>
        <Grid item>
          <a rel='noreferrer' target='_blank' href='https://socratespost.com/'>
            <img
              alt='Socrates Post'
              height={128}
              width={128}
              src={require('../../assets/Partners/SocratesPost.PNG')}
            />
          </a>
        </Grid>
        <Grid item>
          <a rel='noreferrer' target='_blank' href='https://weriseabove.org/'>
            <img
              alt='We Rise Above'
              height={128}
              width={128}
              src={require('../../assets/Partners/WeRiseAbove.PNG')}
            />
          </a>
        </Grid>
        <Grid item>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.wonsulting.com/'
          >
            <img
              alt='Wonsulting'
              height={128}
              width={128}
              src={require('../../assets/Partners/Wonsulting.PNG')}
            />
          </a>
        </Grid>
        <Grid item>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.ymcahonolulu.org/'
          >
            <img
              alt='YMCA Honolulu'
              height={128}
              width={128}
              src={require('../../assets/Partners/YMCAHonolulu.PNG')}
            />
          </a>
        </Grid>
        <Grid item>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://girlgeniusmag.tech/'
          >
            <img
              alt='Girl Genius Magazine'
              height={128}
              width={128}
              src={require('../../assets/Partners/GirlGeniusMagazine.PNG')}
            />
          </a>
        </Grid>
        <Grid item>
          <a
            rel='noreferrer'
            target='_blank'
            href='https://www.girltechboss.com/'
          >
            <img
              alt='Girl Tech Boss'
              height={128}
              width={128}
              src={require('../../assets/Partners/GirlTechBoss.PNG')}
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

export default connect(mapStateToProps, mapDispatchToProps)(Partners);
