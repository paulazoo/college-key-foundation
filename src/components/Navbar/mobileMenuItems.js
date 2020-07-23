import React from 'react';
// Icons
import HomeIcon from '@material-ui/icons/Home';
import GroupIcon from '@material-ui/icons/Group';
import CalendarTodayIcon from '@material-ui/icons/CalendarToday';

import VerticalSplitIcon from '@material-ui/icons/VerticalSplit';

import ViewQuiltIcon from '@material-ui/icons/ViewQuilt';
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

export const loggedOutMenuItems = [
  {
    text: 'Home',
    link: '/',
    icon: <HomeIcon />,
  },
  {
    text: 'About Us',
    link: '/about-us',
    icon: <GroupIcon />,
  },
  {
    text: 'Fellowship Program',
    link: '/fellowship-program',
    icon: <ViewQuiltIcon />,
  },
  {
    text: 'Events',
    link: '/events',
    icon: <CalendarTodayIcon />,
  },
  {
    text: 'Apply',
    link: '/apply',
    icon: <VerticalSplitIcon />,
  },
];

export const loggedInMenuItems = [
  {
    text: 'Dashboard',
    link: '/dashboard',
    icon: <HomeIcon />,
  },
  {
    text: 'Profile',
    link: '/profile',
    icon: <AccountCircleIcon />,
  },
];
