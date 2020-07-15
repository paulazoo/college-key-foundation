import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Card,
  Typography,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import Navbar from '../Navbar/Navbar';
import Footer from '../Landing/Footer';
import Team from './Team';
import WordDivider from '../Shared/WordDivider';
import AboutDrawer from './AboutDrawer';
import MissionPurpose from './MissionPurpose';
import OurStory from './OurStory';

// Custom Components

const useStyles = makeStyles((theme) => ({
  wordDivider: {
    fontWeight: 'bold',
    color: theme.palette.common.gray,
  },
  mainAbout: {
    marginLeft: 240,
  },
}));

function About(props) {
  const classes = useStyles();

  const [selectedAbout, setSelectedAbout] = useState('Mission and Purpose');

  const renderAbout = () => {
    switch (selectedAbout) {
      case 'Mission and Purpose':
        return <MissionPurpose />;
      case 'Our Story':
        return <OurStory />;
      case 'Meet The Team':
        return <Team />;
      default:
        return <MissionPurpose />;
    }
  };

  return (
    <>
      <Navbar />
      <Grid container direction='row'>
        <Grid item>
          <AboutDrawer
            selectedAbout={selectedAbout}
            setSelectedAbout={setSelectedAbout}
          />
          <div className={classes.mainAbout}>{renderAbout()}</div>
        </Grid>
      </Grid>
      <Footer />
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(About);
