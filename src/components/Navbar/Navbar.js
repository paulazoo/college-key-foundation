import React, { useState, useEffect } from 'react';
import { NavLink, useHistory } from 'react-router-dom';
import { connect } from 'react-redux';
import {
  IconButton,
  Button,
  Grid,
  Tooltip,
  Link,
  Toolbar,
} from '@material-ui/core';
import MuiAppBar from '@material-ui/core/AppBar';

// Theme
import { theme } from '../../theme';
import { makeStyles } from '@material-ui/styles';

const useStyles = makeStyles((theme) => ({
  title: {
    fontSize: 24,
    color: theme.palette.common.white,
  },
  toolbar: {
    justifyContent: 'space-between',
  },
  leftLinkActive: {
    color: theme.palette.common.white,
  },
  rightLink: {
    fontSize: 16,
    color: theme.palette.common.white,
    marginLeft: theme.spacing(3),
  },
  linkSecondary: {
    color: theme.palette.secondary.main,
  },
  appBar: {
    height: theme.spacing(15),
    justifyContent: 'center',
    backgroundColor: theme.palette.primary.dark,
  },
}));

function NavBar({ ...props }) {
  const classes = useStyles();
  const history = useHistory();

  useEffect(() => {
    document.body.style.backgroundColor = theme.palette.common.white;
  }, []);

  const logoClick = () => {
    history.push('/');
  };

  return (
    <div>
      <MuiAppBar elevation={0} position='static' className={classes.appBar}>
        <Toolbar className={classes.toolbar}>
          <Grid container direction='row' justify='space-between'>
            <Grid item xs={4}>
              <Grid
                container
                direction='row'
                alignItems='center'
                // justify="center"
                spacing={1}
              >
                <Grid item>
                  <Button onClick={logoClick}>
                    {/* <img
                    src={require('..//logo.ico')}
                    alt='fancy favicon :D'
                    width='64'
                    height='64'
                  /> */}
                  </Button>
                </Grid>
                <Grid item>
                  <Link
                    variant='h6'
                    underline='none'
                    className={classes.title}
                    component={NavLink}
                    to='/'
                  >
                    College blah blah
                  </Link>
                </Grid>
              </Grid>
            </Grid>
            <Grid item>
              <Tooltip title='Home'>
                <Button
                  color='inherit'
                  className={classes.rightLink}
                  component={NavLink}
                  to='/home'
                >
                  Home
                </Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title='About Us'>
                <Button
                  color='inherit'
                  className={classes.rightLink}
                  component={NavLink}
                  to='/about-us'
                >
                  About Us
                </Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title='Mentors'>
                <Button
                  color='inherit'
                  className={classes.rightLink}
                  component={NavLink}
                  to='/mentors'
                >
                  Mentors
                </Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title='Mentees'>
                <Button
                  color='inherit'
                  className={classes.rightLink}
                  component={NavLink}
                  to='/mentees'
                >
                  Mentees
                </Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title='Fellowship Program'>
                <Button
                  color='inherit'
                  className={classes.rightLink}
                  component={NavLink}
                  to='/fellowship-program'
                >
                  Fellowship Program
                </Button>
              </Tooltip>
            </Grid>
            <Grid item>
              <Tooltip title='Donate'>
                <Button
                  color='inherit'
                  className={classes.rightLink}
                  component={NavLink}
                  to='/donate'
                >
                  Donate
                </Button>
              </Tooltip>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Toolbar>
      </MuiAppBar>
    </div>
  );
}

const mapStateToProps = (state) => ({
  backgroundColor: state.backgroundColor,
});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
