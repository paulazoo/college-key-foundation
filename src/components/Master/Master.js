import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
  Divider,
  ListItem,
  ListItemText,
  List,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';
import {
  getAccounts,
  getMentees,
  getMentors,
  getNewsletterEmails,
} from '../../store/actions/api';

// Custom Components
import PersonalSnackbar from '../PersonalSnackbar/PersonalSnackbar';
import Navbar from '../Navbar/Navbar';
import Footer from '../Footer/Footer';
import MasterAccountsContainer from './MasterAccountsContainer';
import MasterNewsletterContainer from './MasterNewsletterContainer';
import MasterEventsContainer from './MasterEventsContainer';
import MasterDrawer from './MasterDrawer.';

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.common.teamGreen,
  },
  main: {
    padding: theme.spacing(4),
    paddingTop: 0,
    paddingBottom: 0,
  },
  card: {
    margin: theme.spacing(2),
    marginTop: 0,
    padding: theme.spacing(2),
  },
  textContainer: {
    textAlign: 'center',
  },
  text: {
    fontWeight: 'bold',
    fontSize: 24,
  },
  title: {
    fontWeight: 'bold',
    fontSize: 48,
  },
  cardUnauthorized: {
    margin: theme.spacing(2),
    padding: theme.spacing(2),
    height: '100vh',
  },
}));

function Master(props) {
  const classes = useStyles();

  const [selectedMaster, setSelectedMaster] = useState('Accounts');

  const renderMaster = () => {
    switch (selectedMaster) {
      case 'Accounts':
        return <MasterAccountsContainer />;
      case 'Newsletter Emails':
        return <MasterNewsletterContainer />;
      case 'Events':
        return <MasterEventsContainer />;
      default:
        return <MasterAccountsContainer />;
    }
  };

  return (
    <div className={classes.root}>
      <Navbar />
      {props.account.email === 'paulazhu@college.harvard.edu' ||
      props.account.email === 'collegekeyfoundation@gmail.com' ? (
        <Grid container direction='row'>
          <Grid item>
            <MasterDrawer
              selectedMaster={selectedMaster}
              setSelectedMaster={setSelectedMaster}
            />
          </Grid>
          <Grid item>
            <Grid
              className={classes.main}
              container
              direction='row'
              alignItems='center'
              justify='center'
              spacing={3}
            >
              <Grid item xs={12} className={classes.textContainer}>
                <Typography className={classes.title}>
                  Master Controls
                </Typography>
                {props.onMobile === true && (
                  <Typography>
                    WARNING: Mobile layout is not finished for this page, so
                    things may look funky.
                  </Typography>
                )}
              </Grid>
              {renderMaster()}
            </Grid>
          </Grid>
        </Grid>
      ) : (
        <Grid container direction='row' alignItems='center' justify='center'>
          <Grid item xs={6}>
            <Card className={classes.cardUnauthorized}>
              <Grid
                container
                direction='row'
                alignItems='center'
                justify='center'
                spacing={3}
              >
                <Grid item xs={12} className={classes.textContainer}>
                  <Typography className={classes.text}>
                    YOU ARE UNAUTHORIZED
                  </Typography>
                </Grid>
              </Grid>
            </Card>
          </Grid>
        </Grid>
      )}
      <Footer />
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.user,
  account: state.account,
  accounts: state.master.accounts,
  mentors: state.master.mentors,
  mentees: state.master.mentees,
  onMobile: state.home.onMobile,
});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
    getAccounts: () => dispatch(getAccounts()),
    getMentors: () => dispatch(getMentors()),
    getMentees: () => dispatch(getMentees()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Master);
