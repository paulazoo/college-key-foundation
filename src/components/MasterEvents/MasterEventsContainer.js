import React, { useState, useEffect } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Typography,
  Card,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';
import { userLogout, setUser } from '../../store/actions/index';

// Redux
import { connect } from 'react-redux';
import CreateEvent from '../CreateEvent/CreateEvent';
import All from '../EventsList/All';
import ExportRegistered from '../GoogleSheets/ExportRegistered';
import ExportJoined from '../GoogleSheets/ExportJoined';

// Custom Components

const useStyles = makeStyles((theme) => ({
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
}));

function MasterEventsContainer(props) {
  const classes = useStyles();

  return (
    <>
      <Grid item xs={12}>
        <Card className={classes.card}>
          <CreateEvent />
        </Card>
        <All />
        <ExportRegistered />
        <ExportJoined />
      </Grid>
    </>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MasterEventsContainer);
