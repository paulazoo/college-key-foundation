import React, { useState, useEffect } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Link from '@material-ui/core/Link';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  NavLink,
  withRouter,
} from 'react-router-dom';
import EventIcon from '@material-ui/icons/Event';
import { IconButton } from '@material-ui/core';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';
import ExitToAppIcon from '@material-ui/icons/ExitToApp';
import SearchIcon from '@material-ui/icons/Search';
import Tooltip from '@material-ui/core/Tooltip';
import MuiAppBar from '@material-ui/core/AppBar';
import Button from '@material-ui/core/Button';

// Icons
import FeedbackIcon from '@material-ui/icons/Feedback';
import FiberNewIcon from '@material-ui/icons/FiberNew';
import SubjectIcon from '@material-ui/icons/Subject';

import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';

import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import TocIcon from '@material-ui/icons/Toc';
import ViewCarouselIcon from '@material-ui/icons/ViewCarousel';
import ReceiptIcon from '@material-ui/icons/Receipt';

import QuestionAnswerIcon from '@material-ui/icons/QuestionAnswer';

import ListAltIcon from '@material-ui/icons/ListAlt';

// Redux
import { connect } from 'react-redux';

// Theme
import { theme } from '../../theme';
import { makeStyles } from '@material-ui/styles';

// Custom Components
import MobileDrawer from './MobileDrawer';

const useStyles = makeStyles((theme) => ({}));

function MobileNavbar({ ...props }) {
  const classes = useStyles();

  const menuItems = [
    {
      text: 'Home',
      link: '/',
      icon: <FeedbackIcon />,
    },
    {
      text: 'About Us',
      link: '/about-us',
      icon: <ListAltIcon />,
    },
    {
      text: 'Fellowship Program',
      link: '/fellowship-program',
      icon: <ViewQuiltIcon />,
    },
    {
      text: 'Apply',
      link: '/apply',
      icon: <VerticalSplitIcon />,
    },
    {
      text: 'Login',
      link: '/login',
      icon: <VerticalSplitIcon />,
    },
  ];

  return (
    <div>
      <MobileDrawer menuItems={menuItems} />
    </div>
  );
}

const mapStateToProps = (state) => ({});

const mapDispatchToProps = (dispatch) => ({});

export default connect(mapStateToProps, mapDispatchToProps)(MobileNavbar);
