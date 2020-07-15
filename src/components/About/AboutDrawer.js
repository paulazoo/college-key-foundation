import React, { useState } from 'react';
import {
  Button,
  TextField,
  Grid,
  CardContent,
  Drawer,
  Toolbar,
  List,
  ListItem,
  ListItemText,
} from '@material-ui/core';

// Theme
import { makeStyles } from '@material-ui/core/styles';

// Redux
import { connect } from 'react-redux';
import { userLogout, setUser } from '../../store/actions/index';

// Custom Components

const useStyles = makeStyles((theme) => ({
  drawerContainer: {
    width: 240,
    position: 'absolute',
  },
}));

function AboutDrawer(props) {
  const classes = useStyles();

  return (
    <div className={classes.drawerContainer}>
      <List>
        {['Mission and Purpose', 'Our Story', 'Meet the Team'].map(
          (text, index) => (
            <ListItem button key={text}>
              <ListItemText primary={text} />
            </ListItem>
          )
        )}
      </List>
    </div>
  );
}

const mapStateToProps = (state) => ({});

function mapDispatchToProps(dispatch) {
  return {
    userLogout: () => dispatch(userLogout()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(AboutDrawer);
