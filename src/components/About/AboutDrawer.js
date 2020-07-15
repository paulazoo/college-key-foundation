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
  sidebarItem: {
    borderRadius: '10px',
  },
  sidebarItemSelected: {
    backgroundColor: `${theme.palette.secondary.main} !important`,
    color: 'white',
    fontWeight: 600,
  },
}));

function AboutDrawer({ selectedAbout, setSelectedAbout, ...props }) {
  const classes = useStyles();

  const aboutChoices = [
    { label: 'Mission and Purpose' },
    { label: 'Our Story' },
    { label: 'Meet The Team' },
  ];

  return (
    <div className={classes.drawerContainer}>
      <List>
        {aboutChoices.map((choice, index) => (
          <ListItem
            classes={{
              root: classes.sidebarItem,
              selected: classes.sidebarItemSelected,
            }}
            button
            key={choice.label}
            onClick={() => {
              setSelectedAbout(choice.label);
            }}
            selected={selectedAbout === choice.label}
          >
            <ListItemText primary={choice.label} />
          </ListItem>
        ))}
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
