import React, { useState } from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import Button from '@material-ui/core/Button';
import { Link, Grid, Divider, List, Typography } from '@material-ui/core';
import IconButton from '@material-ui/core/IconButton';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import MuiAppBar from '@material-ui/core/AppBar';

import MenuOutlinedIcon from '@material-ui/icons/MenuOutlined';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  withRouter,
  useHistory,
} from 'react-router-dom';

const useStyles = makeStyles((theme) => ({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  paper: {
    background: theme.palette.primary.main,
  },
  title: {
    fontSize: 12,
    color: theme.palette.common.white,
  },
}));

export default function MobileDrawer({ menuItems, ...props }) {
  const classes = useStyles();

  const [state, setState] = useState({
    left: false,
  });

  const anchor = 'left';

  const toggleDrawer = (anchor, open) => (event) => {
    if (
      event.type === 'keydown' &&
      (event.key === 'Tab' || event.key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role='presentation'
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {menuItems.map((item, index) => (
          <Button
            color='inherit'
            component={NavLink}
            to={item.link}
            key={item.text}
          >
            <ListItem button key={item.text}>
              <ListItemIcon style={{ color: 'white' }}>
                {item.icon}
              </ListItemIcon>
              <ListItemText style={{ color: 'white' }} primary={item.text} />
            </ListItem>
          </Button>
        ))}
        <Button
          color='inherit'
          target='_blank'
          key='Donate'
          href='https://www.gofundme.com/f/the-college-key'
        >
          <ListItem button key='Donate'>
            <ListItemIcon style={{ color: 'white' }}>
              <MenuOutlinedIcon />
            </ListItemIcon>
            <ListItemText style={{ color: 'white' }} primary='Donate' />
          </ListItem>
        </Button>
      </List>
    </div>
  );

  const history = useHistory();

  const logoClick = () => {
    history.push('/');
  };

  return (
    <div>
      <MuiAppBar
        elevation={0}
        position='static'
        color='primary'
        style={{ height: 60 }}
      >
        <Grid
          container
          direction='row'
          alignItems='center'
          // justify="center"
          spacing={1}
        >
          <Grid item>
            <IconButton onClick={toggleDrawer(anchor, true)}>
              <MenuOutlinedIcon />
            </IconButton>
          </Grid>
          <Grid item>
            <Button onClick={logoClick}>
              <img
                src={require('../../assets/squareLogo.PNG')}
                alt='fancy favicon :D'
                width='48'
                height='48'
              />
            </Button>
          </Grid>
          <Grid item>
            <Link
              underline='none'
              className={classes.title}
              component={NavLink}
              to='/'
            >
              <Typography>College Key Foundation</Typography>
            </Link>
          </Grid>
        </Grid>
      </MuiAppBar>
      <Drawer
        classes={{ paper: classes.paper }}
        anchor={anchor}
        open={state[anchor]}
        onClose={toggleDrawer(anchor, false)}
      >
        {list(anchor)}
      </Drawer>
    </div>
  );
}
